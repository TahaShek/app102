import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HomeComponent } from './MAIN-Component/home/home/home.component';
import { HeaderComponent } from './MAIN-Component/header/header/header.component';
import { FooterComponent } from './MAIN-Component/footer/footer.component';
import { ProductsComponent } from './MAIN-Component/products/products.component';
import { AboutUsComponent } from './MAIN-Component/about-us/about-us.component';
import { ConatctUsComponent } from './MAIN-Component/conatct-us/conatct-us.component';
import { ViewProductsComponent } from './MAIN-Component/view-products/view-products.component';
import { OrderSuccessfulComponent } from './MAIN-Component/order-successful/order-successful.component';
import { OrderFailedComponent } from './MAIN-Component/order-failed/order-failed.component';
import { CheckOutComponent } from './MAIN-Component/check-out/check-out.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    AboutUsComponent,
    ConatctUsComponent,
    ViewProductsComponent,
    OrderSuccessfulComponent,
    OrderFailedComponent,
    CheckOutComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
