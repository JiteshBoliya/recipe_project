import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shoppinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService,RecipeService]
})
export class AppComponent implements OnInit {
  public static user:string ;
  // static user: any;
  ngOnInit(): void {
    this.mydate=new Date();
  }
  mydate: Date;
}
