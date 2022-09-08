import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }
,
{ path: 'UserModule', loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule) }
, 
{ path: 'AdminModule', loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) }
 ,
{ path: 'ManagmentModule', loadChildren: () => import('./managment-module/managment-module.module').then(m => m.ManagmentModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
