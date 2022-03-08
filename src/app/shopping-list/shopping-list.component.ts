import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  private igChangeSub : Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(){
    this.ingredients= this.slService.getIngredient();
    this.igChangeSub = this.slService.ingredientChnaged
    .subscribe((ingredient:Ingredient[]) => {
      this.ingredients=ingredient;
    });
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  oneditItem(index:number){
    this.slService.stratedEditing.next(index);
  }

}
