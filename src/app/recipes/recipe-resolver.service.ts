// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { Observable } from "rxjs";
// import { Recipe } from "./recipe.model";
// import { RecipeService } from "./recipe.service";

// @Injectable({providedIn:'root'})
// export class RecipeResolver implements Resolve<Recipe[]>{

//     constructor(private recipeService: RecipeService){}

//     const recipeService=this.recipeService.getRecipe();
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
//         return this.recipeService.fatchRecipe();
//     }
// }