import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModle } from './app-routing.module';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HttpClientModule} from '@angular/common/http';
// import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
import { SharedModule } from './shared/shared.module';
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
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
