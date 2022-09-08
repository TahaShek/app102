import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentModuleRoutingModule } from './managment-module-routing.module';
import { ManagmentModuleComponent } from './managment-module.component';
import { AdminLoginComponent } from './Managment-Component/Admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './Managment-Component/Admin/admin-register/admin-register.component';
import { UserLoginComponent } from './Managment-Component/user-login/user-login.component';
import { UserRegisterComponent } from './Managment-Component/user-register/user-register.component';


@NgModule({
  declarations: [
    ManagmentModuleComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    ManagmentModuleRoutingModule
  ]
})
export class ManagmentModuleModule { }
