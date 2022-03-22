import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesComponent } from "./recipes.component";

const routes:Routes = [
    {
         path: '',
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'new', component: RecipeEditComponent },
            // {path: ':id',component: RecipeDetailComponent,resolve:[RecipeResolver]},
            // {path: ':id/edit',component: RecipeEditComponent,resolve:[RecipeResolver]},
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent },

        ]
    },

];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class RecipesRoutingModule {

}