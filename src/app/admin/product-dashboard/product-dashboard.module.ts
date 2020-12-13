import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDashboardRoutingModule } from './product-dashboard-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {ProductDashboardComponent} from './product-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SearchProductComponent } from './search-product/search-product.component';


@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductListComponent,
    AddProductComponent,
    UpdateProductComponent,
    SearchProductComponent],
  imports: [
    CommonModule,
    ProductDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class ProductDashboardModule { }
