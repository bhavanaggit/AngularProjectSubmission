import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ReactiveFormsModule} from '@angular/forms';
import{FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import{DataService} from './data.service';
import { UpdateRegComponent } from './update-reg/update-reg.component';
import { ViewProdComponent } from './view-prod/view-prod.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { EarningsComponent } from './earnings/earnings.component';
import { AddearningDetailsComponent } from './addearning-details/addearning-details.component';
import { EaringprodDetailsComponent } from './earingprod-details/earingprod-details.component';
import { EaringlistComponent } from './earinglist/earinglist.component';
import { BanglesComponent } from './bangles/bangles.component';
import { HandmadejelwComponent } from './handmadejelw/handmadejelw.component';
import { TemplejewlComponent } from './templejewl/templejewl.component';
import { NacklacesComponent } from './nacklaces/nacklaces.component';
import { AddbanglesComponent } from './addbangles/addbangles.component';
import { AddnacklacesComponent } from './addnacklaces/addnacklaces.component';
import { AddhandmadejwlComponent } from './addhandmadejwl/addhandmadejwl.component';
import { AddtemplejwlComponent } from './addtemplejwl/addtemplejwl.component';
import { BangledetailComponent } from './bangledetail/bangledetail.component';
import { TemplejwldetailComponent } from './templejwldetail/templejwldetail.component';
import { NacklaceDetailsComponent } from './nacklace-details/nacklace-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    AdmindashboardComponent,
    AddproductsComponent,
    UpdateRegComponent,
    ViewProdComponent,
    ViewUserComponent,
    ProductComponent,
    ProductDetailsComponent,
   
    SidenavbarComponent,
    EarningsComponent,
    AddearningDetailsComponent,
    EaringprodDetailsComponent,
    EaringlistComponent,
    BanglesComponent,
    HandmadejelwComponent,
    TemplejewlComponent,
    NacklacesComponent,
    AddbanglesComponent,
    AddnacklacesComponent,
    AddhandmadejwlComponent,
    AddtemplejwlComponent,
    BangledetailComponent,
    TemplejwldetailComponent,
    NacklaceDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
