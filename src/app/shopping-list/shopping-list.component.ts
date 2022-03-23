import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import * as ShoppingList from './store/shopping-list.reducer'
import * as ShoppingListActions from './store/shopping-list.actions'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients:Ingredient[];
  // private igChangeSub : Subscription;

  ingrediente:Observable<{ingrediente:Ingredient[]}>;

  constructor(
    private slService: ShoppingListService,
     private store:Store<ShoppingList.AppState>
    ) { }

  ngOnInit(){
      this.ingrediente=this.store.select('ShoppingList');
      // console.log(this.ingrediente);
      
    // this.ingredients= this.slService.getIngredient();
    // this.igChangeSub = this.slService.ingredientChnaged
    // .subscribe((ingredient:Ingredient[]) => {
    //   this.ingredients=ingredient;
    // });
  }
  // ngOnDestroy(): void {
  //   this.igChangeSub.unsubscribe();
  // }
  oneditItem(index:number){
    this.slService.stratedEditing.next(index);
    // this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}
