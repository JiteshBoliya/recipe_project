import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shoppinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService,RecipeService]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.mydate=new Date();
    this.authService.autologin();
  }
  mydate: Date;
}
