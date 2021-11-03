import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductService } from './_services/productService.service';
import { PaymentTypesComponent } from './shared/payment-types/payment-types.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './layout/home/home.component';
import { ProductModule } from './core/products/product.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyInterseptorService } from './_services/my-interseptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DropDownComponent,
    PaymentTypesComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService,{provide:HTTP_INTERCEPTORS,useClass:MyInterseptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
