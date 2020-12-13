import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDashboardComponent} from './product-dashboard.component';
import {ProductListComponent} from './product-list/product-list.component';
import {AddProductComponent} from './add-product/add-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {SearchProductComponent} from './search-product/search-product.component';

const routes: Routes = [
  { path: '', component: ProductDashboardComponent, children: [
      { path: 'product-list', component: SearchProductComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'update-product/:id', component: UpdateProductComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDashboardRoutingModule { }
