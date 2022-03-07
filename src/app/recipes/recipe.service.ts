import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
    // recipeselected= new Subject<Recipe>();
    private  recipes: Recipe[]=[
        new Recipe('Pizza',
        'simple',
        'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
        [
            new Ingredient('Bread',1),
            new Ingredient('cheez',3)
        ])
        ,new Recipe('Samosa','simple','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg',
        [
            new Ingredient('Pattato',1),
            new Ingredient('oil',1)
        ])
        ,new Recipe('Burger','Big','https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg',
        [
            new Ingredient('Bread',2),
            new Ingredient('AluTiki',1)
        ])
    ];
    constructor(private slService: ShoppingListService) {}
   getRecipe(){
       return this.recipes.slice();
   } 
   addIngredienttoshopping(ingredient:Ingredient[]){
        this.slService.addIngredients(ingredient);
   }
   getrec(id:number){
       return this.recipes[id];
   }
}