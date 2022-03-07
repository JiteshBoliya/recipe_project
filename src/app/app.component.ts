import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shoppinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
}
