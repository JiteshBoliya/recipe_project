import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  islogin = false;
  isLoading=false;
  error: any=null;
  success: any=null;
  user: any=null;
  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {}
  onSwitchmode() {
    this.islogin = !this.islogin;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.isLoading=true;
    const email = form.value.email;
    const password = form.value.password;
    if (!this.islogin) {
      this.authService.signup(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading=false;
         this.error="";
         this.success="SignUp Successfully";
         this.router.navigate(['/recipes']);
      }
      ,errorMassage => {
        this.error=errorMassage;
        this.isLoading=false;
      }
      )
    }else{
      this.authService.loginIn(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading=false;
        this.error="";
        this.success="Login Successfully";
        this.router.navigate(['/recipes']);
 
      }
      ,errorMassage => {
        this.error=errorMassage;
        this.isLoading=false;
      }
      )

    }
    form.reset();
  }
  onHandleError(){
    this.error=null;
  }
}
