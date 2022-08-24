import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboradComponent } from './admin-Component/dashboard/dashborad/dashborad.component';
import { ProductsComponent } from './admin-Component/products/products/products.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboradComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
