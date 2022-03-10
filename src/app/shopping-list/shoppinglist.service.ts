import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientChnaged=new Subject<Ingredient[]>()
    stratedEditing=new Subject<number>();
    ingredients:Ingredient[] = [];
      getIngredient(){
          return this.ingredients.slice();
      };
      addIngredient(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientChnaged.next(this.ingredients.slice())
      };
      updateIngredient(index:number,newingredient:Ingredient){
        this.ingredients[index]=newingredient
        this.ingredientChnaged.next(this.ingredients.slice());
      };
      addIngredients(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient);    
        this.ingredientChnaged.next(this.ingredients.slice());
      };
      getIngredients(index:number){
          return this.ingredients[index];
      };
      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChnaged.next(this.ingredients.slice());    
      };
}