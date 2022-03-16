import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";
import { User } from "./user.model";

interface AuthResponseData{
    kind: string;
    idToken: string;
    email:string;
    refreshToken:string;
    expiresIn:number;
    localId:string;
    registered?:boolean;
}

@Injectable({providedIn:'root'})
export class AuthService{
    user=new BehaviorSubject<User>(null);
   private tokenExpirationTimer:any; 
    constructor(private http:HttpClient,private router:Router){}
    signup(email:string,password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMHV03ohj_FMogaj5BEJGgE22U77q_sCw'
            ,
            {
                email:email,
                password:password,
                returnSecureToken:true
            }
        ).pipe( catchError(this.checkError),
        tap(resData=>{
            this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn
            )
        })
        )
    }
    loginIn(email:string,password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMHV03ohj_FMogaj5BEJGgE22U77q_sCw'
            ,
            {
                email:email,
                password:password,
                returnSecureToken:true
            }
        ).pipe( catchError(this.checkError),
        tap(resData=>{
            this.handleAuthentication(
                resData.email,
                resData.localId,
                resData.idToken,
                +resData.expiresIn
            )
        })
        )
    }
    logout(){
        console.log("logout");
        
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer=null; 
    }
    autologout(expirationDuration: number){
        this.tokenExpirationTimer= setTimeout(() =>{
            this.logout();
        },expirationDuration);
    }
    private checkError(errorRes:HttpErrorResponse){
            let errorMassage = "Error";
            if(!errorRes.error|| !errorRes.error.error){
                return throwError(errorMassage);
            }
            switch(errorRes.error.error.message){   
                case 'EMAIL_EXISTS':
                    errorMassage ="Email already exists";
                    break;
                case 'EMAIL_NOT_FOUND':
                    errorMassage ="Email id not valid";
                    break;
                case 'INVALID_PASSWORD':
                    errorMassage ="Password not valid";
                    break;
            }
            return throwError(errorMassage);
    }
    private handleAuthentication(
        email: string, 
        userId:string,
        token: string,
        expiresIn: number
        ){
        const expirationDate = new Date(new Date().getTime()+ expiresIn *1000);       
        const user = new User(
            email,
            userId, 
            token,
            expirationDate
            );
            this.user.next(user);
            this.autologout(expiresIn*1000);
            localStorage.setItem('userData',JSON.stringify(user))
        }
    autologin(){
        const userdata:{
            email:string,
            id:string,
            _token:string,
            _tokenExpirationDate:string
        } =JSON.parse(localStorage.getItem('userData'));
    if(!userdata){
        return;
    }
    const loadedUser=new User(
        userdata.email,
        userdata.id,
        userdata._token,
        new Date(userdata._tokenExpirationDate)
    );
    if(loadedUser.token){
        this.user.next(loadedUser);
        const expirationDuration = new Date(userdata._tokenExpirationDate).getTime()-
        new Date().getTime();
        this.autologout(expirationDuration);
    }
    }
}