import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shoppinglist.service";

@NgModule({
    providers: [
        ShoppingListService,
        RecipeService,
        {
            provide:HTTP_INTERCEPTORS, 
            useClass:AuthInterceptorService,
            multi:true
        }
    ]
})
export class CoreModule{
    
}
    
    
