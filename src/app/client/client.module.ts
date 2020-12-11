import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import {ClientComponent} from './client.component';
import {FooterComponent} from './footer/footer.component';
import {GoogleMapComponent} from './google-map/google-map.component';
import {HeaderComponent} from './header/header.component';
import {HeroSliderComponent} from './hero-slider/hero-slider.component';
import {HomeComponent} from './home/home.component';
import {HotProductsComponent} from './hot-products/hot-products.component';
import {ProductComponent} from './product/product.component';
import {ProductAreaComponent} from './product-area/product-area.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ShopGridComponent} from './shop-grid/shop-grid.component';
import {ShopProductListComponent} from './shop-product-list/shop-product-list.component';
import {ShopServiceComponent} from './shop-service/shop-service.component';
import {ShopSidebarComponent} from './shop-sidebar/shop-sidebar.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {AgmCoreModule} from '@agm/core';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MyOrdersComponent } from './my-orders/my-orders.component';


@NgModule({
  declarations: [
    ClientComponent,
    FooterComponent,
    GoogleMapComponent,
    HeaderComponent,
    HeroSliderComponent,
    HomeComponent,
    HotProductsComponent,
    ProductComponent,
    ProductAreaComponent,
    ProductDetailsComponent,
    ShopGridComponent,
    ShopProductListComponent,
    ShopServiceComponent,
    ShopSidebarComponent,
    ShoppingCartComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgrpK5AUEJWZ3plzzsX5l25J8inJ72o_s'
    }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class ClientModule { }
