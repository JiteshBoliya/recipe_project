import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientChnaged=new Subject<Ingredient[]>()
    ingredients:Ingredient[] = [
        new Ingredient('patteto',10),
        new Ingredient('tameto',20)
      ];
      getIngredient(){
          return this.ingredients.slice();
      }
      addIngredient(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientChnaged.next(this.ingredients.slice())
      }
      addIngredients(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient);    
        this.ingredientChnaged.next(this.ingredients.slice());
      }
}