import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import {AdminComponent} from './admin.component';
import {SidenavListComponent} from './sidenav-list/sidenav-list.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AdminComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
