import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserregComponent } from './userreg/userreg.component';
import { UserlogComponent } from './userlog/userlog.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UserviewComponent } from './userview/userview.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"add",
    component:AddProductComponent
  },
  {
    path:"view",
    component:ViewProductComponent
  },
  {
    path:"search",
    component:SearchProductComponent
  },
  {
    path:"nav",
    component:NavComponent
  },
  {
    path:"userreg",
    component:UserregComponent
  },
  {
    path:"userlog",
    component:UserlogComponent
  },
  {
    path:"navbar",
    component:NavbarComponent
  },
  {
    path:"userview",
    component:UserviewComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductComponent,
    SearchProductComponent,
    NavComponent,
    AdminComponent,
    NavbarComponent,
    UserregComponent,
    UserlogComponent,
    MainNavComponent,
    UserviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
