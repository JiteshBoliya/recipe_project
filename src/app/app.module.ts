import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModle } from './app-routing.module';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
import { reducers } from './shopping-list/store';
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
    StoreModule.forRoot(reducers),
    
     ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
