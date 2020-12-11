import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDashboardRoutingModule } from './order-dashboard-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import {OrderDashboardComponent} from './order-dashboard.component';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    OrderDashboardComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    OrderDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class OrderDashboardModule { }
