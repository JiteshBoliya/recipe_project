import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { PageNotfoundComponent } from "./page-notfound/page-notfound.component";
import { RecipeModule } from "./recipes/recipes.module";
//   import { RecipeResolver } from "./recipes/recipe-resolver.service";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes:Routes=[
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'auth',component: AuthComponent},
    {path:'page-notfound',component: PageNotfoundComponent},
    // {path:'**',redirectTo:'/page-notfound'}
]; 
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModle{

}