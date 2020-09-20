import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ViewProdComponent } from './view-prod/view-prod.component';
import { AddearningDetailsComponent } from './addearning-details/addearning-details.component';
import { EarningsComponent } from './earnings/earnings.component';
import { EaringprodDetailsComponent } from './earingprod-details/earingprod-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NacklacesComponent } from './nacklaces/nacklaces.component';
import { BanglesComponent } from './bangles/bangles.component';
import { HandmadejelwComponent } from './handmadejelw/handmadejelw.component';
import { TemplejewlComponent } from './templejewl/templejewl.component';
import { AddbanglesComponent } from './addbangles/addbangles.component';
import { BangledetailComponent } from './bangledetail/bangledetail.component';
import { AddnacklacesComponent } from './addnacklaces/addnacklaces.component';
import { NacklaceDetailsComponent } from './nacklace-details/nacklace-details.component';
import { CartComponent } from './cart/cart.component';
import { AddhandmadejwlComponent } from './addhandmadejwl/addhandmadejwl.component';
import { AddtemplejwlComponent } from './addtemplejwl/addtemplejwl.component';

const routes: Routes = [{path:"",component:DashboardComponent},
  {path:"login",component:LoginComponent},
{path:"reg",component:RegistrationComponent},
{path:"add_prod",component:AddproductsComponent},
{path:"vw_usr",component:ViewUserComponent},
{path:"login/dashboard",component:AdmindashboardComponent},
{path:"admin/dashboard",component:AdmindashboardComponent},
{path:"vw_prod",component:ViewProdComponent},
{path:"addear_prod",component:AddearningDetailsComponent},
{path:"vw_er_dt",component:EarningsComponent},
{path:"er_dt/:id",component:ProductDetailsComponent},
{path:"bng_dt/:id",component:BangledetailComponent},
{path:"nck_dt/:id",component:NacklaceDetailsComponent},
{path:"bck_earlst",component:EarningsComponent},
{path:"nck_list",component:NacklacesComponent},
{path:"bang_list",component:BanglesComponent},
{path:"bck_banglst",component:BanglesComponent},
{path:"bck_ncklst",component:NacklacesComponent},
{path:"hand_list",component:HandmadejelwComponent},
{path:"temp_list",component:TemplejewlComponent},
{path:"addbang_prod",component:AddbanglesComponent},
{path:"addnck_prod",component:AddnacklacesComponent},
{path:"shp_crt",component:CartComponent},
{path:"shp_crt/:id",component:CartComponent},
{path:"bck_HanJwl",component:HandmadejelwComponent},
{path:"bck_tempJwl", component:TemplejewlComponent},
{path:"addhmdJwl_prod",component:AddhandmadejwlComponent},
{path:"addtemple_prod", component:AddtemplejwlComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
