import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { exhaustMap, map, Subject, take, tap } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./recipe.model";
import { AuthService } from "../auth/auth.service";
@Injectable()
export class RecipeService {
    recipechanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];
    constructor(private slService: ShoppingListService, private http: HttpClient, private auth: AuthService) { }

    getRecipe() {
        return this.recipes.slice();
    }
    addIngredienttoshopping(ingredient: Ingredient[]) {
        this.slService.addIngredients(ingredient);
    }
    getrec(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipechanged.next(this.recipes.slice());
        console.log(this.recipes);

    }
    updateResipe(index: number, newrecipe: Recipe) {
        this.recipes[index] = newrecipe;
        this.recipechanged.next(this.recipes.slice());
    }

    deleteRecipes(index: number) {
        this.recipes.splice(index, 1);
        this.recipechanged.next(this.recipes.slice());
    }

    storeRecipe() {
        this.http.put('https://recipe-v1-default-rtdb.firebaseio.com/recipe.json', this.getRecipe())
            .subscribe(response => {
                console.log(response);
            })
    }
    fatchRecipe() {

        // console.log(user);
        return this.http
            .get<Recipe[]>('https://recipe-v1-default-rtdb.firebaseio.com/recipe.json').pipe(
                map(recipe => {
                    return recipe.map(recipe => {

                        return { ...recipe, ingredients: recipe.ingredient ? recipe.ingredient : [] }
                    })
                })
                , tap(recipe => {
                    this.recipes = recipe;
                    this.recipechanged.next(this.recipes.slice());
                })

            )
    }
}