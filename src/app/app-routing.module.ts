import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { PageNotfoundComponent } from "./page-notfound/page-notfound.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
//   import { RecipeResolver } from "./recipes/recipe-resolver.service";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes:Routes=[
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes',component:RecipesComponent,
    children:[
        {path:'new',component: RecipeEditComponent},
        // {path: ':id',component: RecipeDetailComponent,resolve:[RecipeResolver]},
        // {path: ':id/edit',component: RecipeEditComponent,resolve:[RecipeResolver]},
     {path: ':id',component: RecipeDetailComponent},
        {path: ':id/edit',component: RecipeEditComponent},
    
    ]},
    {path:'shopping-list',component:ShoppingListComponent},
    {path:'auth',component: AuthComponent},
    {path:'page-notfound',component: PageNotfoundComponent},
    {path:'**',redirectTo:'/page-notfound'}
]; 
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModle{}