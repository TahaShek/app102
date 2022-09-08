import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './admin-Component/dashboard/dashborad/dashborad.component';
import { ProductsComponent } from './admin-Component/products/products/products.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent ,
 children:[
{path:'dash-board',component:DashboradComponent},
{path:'products',component:ProductsComponent},
 ]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
