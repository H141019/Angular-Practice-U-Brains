import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductItemComponent } from './component/product-item/product-item.component';
//import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { FormsModule } from  '@angular/forms';
// import { AuthUserComponent } from './component/auth-user/auth-user.component';
// import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';
// import { ProductComponent } from './component/product/product.component';
// import { PipesComponent } from './component/pipes/pipes/pipes.component';
//import { UserListComponent } from './components/user-list/user-list.component';
// import { ChangeUsernameComponent } from './component/change-username/change-username.component';
// import { ChangeUsernameAutoComponent } from './components-auto/change-username-auto/change-username-auto.component';
// import { SmsAppComponent } from './sms-app/sms-app/sms-app.component';
// import { ShowPasswordComponent } from './show-password/show-password/show-password.component';
// import { AmountRangeComponent } from './amount-range/amount-range/amount-range.component';
// import { ThemeSelectorComponent } from './theme-selector/theme-selector/theme-selector.component';
// import { UserRegisterComponent } from './user-register/user-register/user-register.component';
   import { HttpClientModule } from "@angular/common/http";
import { ContactAppComponent } from './components/contact-app/contact-app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    // AuthUserComponent,
    // ShopingCartComponent,
    // ProductComponent,
    // PipesComponent,
    // UserListComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactCardComponent,
    // ChangeUsernameComponent,
    // ChangeUsernameAutoComponent,
    // SmsAppComponent,
    // ShowPasswordComponent,
    // AmountRangeComponent,
    // ThemeSelectorComponent,
    // UserRegisterComponent,
    // ProductItemComponent,
    //ShoppingCartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
