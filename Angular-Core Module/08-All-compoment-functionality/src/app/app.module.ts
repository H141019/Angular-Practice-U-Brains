import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductItemComponent } from './component/product-item/product-item.component';
//import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { FormsModule } from  '@angular/forms';
import { ChangeUsernameComponent } from './component/change-username/change-username.component';
import { ChangeUsernameAutoComponent } from './components-auto/change-username-auto/change-username-auto.component';
import { SmsAppComponent } from './sms-app/sms-app/sms-app.component';
import { ShowPasswordComponent } from './show-password/show-password/show-password.component';
import { AmountRangeComponent } from './amount-range/amount-range/amount-range.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector/theme-selector.component';
import { UserRegisterComponent } from './user-register/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeUsernameComponent,
    ChangeUsernameAutoComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    ThemeSelectorComponent,
    UserRegisterComponent,
    // ProductItemComponent,
    //ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
