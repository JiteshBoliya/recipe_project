import { EventEmitter, Injectable } from "@angular/core";
import {HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipechanged= new Subject<Recipe[]>();
    private  recipes: Recipe[]=[];
    constructor(private slService: ShoppingListService,private http: HttpClient) {}
   
    getRecipe(){
       return this.recipes.slice();
    } 
   addIngredienttoshopping(ingredient:Ingredient[]){
        this.slService.addIngredients(ingredient);
   }
   getrec(id:number){
       return this.recipes[id];
   }

   addRecipe(recipe:Recipe){ 
    this.recipes.push(recipe);
    this.recipechanged.next(this.recipes.slice());    
    console.log(this.recipes);
      
   }
   updateResipe(index:number,newrecipe:Recipe){
    this.recipes[index]=newrecipe;
    this.recipechanged.next(this.recipes.slice()); 
   }

   deleteRecipes(index:number){
    this.recipes.splice(index,1);
    this.recipechanged.next(this.recipes.slice()); 
    }

    storeRecipe(){
        this.http.put('https://recipe-v1-default-rtdb.firebaseio.com/recipe.json',this.getRecipe())
        .subscribe(response=>{
            console.log(response);
        })
    }
    fatchRecipe(){
        this.http.get<Recipe[]>('https://recipe-v1-default-rtdb.firebaseio.com/recipe.json')
        .subscribe(recipe=>{
            this.recipes=recipe;
        this.recipechanged.next(this.recipes.slice());
        })
    }
}