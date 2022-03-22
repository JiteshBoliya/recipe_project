import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { PageNotfoundComponent } from "./page-notfound/page-notfound.component";

const appRoutes:Routes=[
    {
        path:'', 
        redirectTo:'/recipes', 
        pathMatch:'full'
    },
    {
        path:'recipes',
        loadChildren:()=>import('./recipes/recipes.module').then(m=>m.RecipeModule)
    },
    {
        path:'shopping-list',
        loadChildren:()=>import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModel)
    },
    {
        path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule )
    },
    {
        path:'page-notfound',
        component: PageNotfoundComponent
    },
    // {path:'**',redirectTo:'/page-notfound'}
]; 
@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModle{}