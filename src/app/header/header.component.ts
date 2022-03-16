import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mydate: Date;
  isAuthenticated= false;
  private usersub:Subscription;
  // Injecting Service
  constructor(private recipeService: RecipeService,private authService: AuthService) { }
  ngOnInit(): void {
    this.mydate=new Date();
    this.authService.user.subscribe(user=>{
        this.isAuthenticated = !!user;
    });
  }

  // Call service method
  onSave(){
    this.recipeService.storeRecipe();
  }
  onFatch(){
    this.recipeService.fatchRecipe().subscribe();
  }
  onlogout(){
    this.authService.logout();
  }
  ngOnDestroy(){
    this.usersub.unsubscribe(); 
  }
}
