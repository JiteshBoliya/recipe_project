import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModle } from './app-routing.module';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { SpinnerLoadingComponent } from './shared/spinner-loading/spinner-loading.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';
import { StoreModule} from '@ngrx/store'
// import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
import { RecipeModule } from './recipes/recipes.module';
import { ShoppingListModel } from './shopping-list/shopping-list.module';
// import { SharedModule } from './shared/shared.module';
// import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './shopping-list/shoppinglist.service';
import { CoreModule } from './core.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModle,
  
    SharedModule,
    // StoreModule.forRoot({shoppingList:shoppingListReducer}),
     ReactiveFormsModule,
     HttpClientModule,
    RecipeModule,
    AuthModule,
    ShoppingListModel,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
