import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductItemComponent } from './component/product-item/product-item.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProductItemComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
