import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderDashboardComponent} from './order-dashboard.component';

const routes: Routes = [
  { path: '', component: OrderDashboardComponent, children: [
      { path: 'order-list', component: OrderListComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderDashboardRoutingModule { }
