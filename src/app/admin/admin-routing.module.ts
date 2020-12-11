import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: 'orders', loadChildren: () => import(`./order-dashboard/order-dashboard.module`).then(o => o.OrderDashboardModule) },
      { path: 'products', loadChildren: () => import(`./product-dashboard/product-dashboard.module`).then(o => o.ProductDashboardModule) },

    ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
