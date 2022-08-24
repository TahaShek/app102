import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Managment-Component/Admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './Managment-Component/Admin/admin-register/admin-register.component';
import { UserLoginComponent } from './Managment-Component/user-login/user-login.component';
import { UserRegisterComponent } from './Managment-Component/user-register/user-register.component';
import { ManagmentModuleComponent } from './managment-module.component';

const routes: Routes = [{ path: '', component: ManagmentModuleComponent , 
children:[
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-register',component:AdminRegisterComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-Register',component:UserRegisterComponent},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagmentModuleRoutingModule { }
