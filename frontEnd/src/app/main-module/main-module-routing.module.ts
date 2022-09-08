import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './MAIN-Component/about-us/about-us.component';
import { CheckOutComponent } from './MAIN-Component/check-out/check-out.component';
import { ConatctUsComponent } from './MAIN-Component/conatct-us/conatct-us.component';
import { HomeComponent } from './MAIN-Component/home/home/home.component';
import { OrderFailedComponent } from './MAIN-Component/order-failed/order-failed.component';
import { OrderSuccessfulComponent } from './MAIN-Component/order-successful/order-successful.component';
import { ProductsComponent } from './MAIN-Component/products/products.component';
import { ViewProductsComponent } from './MAIN-Component/view-products/view-products.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ path: '', component: MainModuleComponent, 
children: [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'about-us',component:AboutUsComponent},
{path:'contact-us',component:ConatctUsComponent},
{path:'products',component:ProductsComponent},
{path:'view-products',component:ViewProductsComponent},
{path:'check-out',component:CheckOutComponent},
{path:'order-successful',component:OrderSuccessfulComponent},
{path:'order-fail',component:OrderFailedComponent},

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
