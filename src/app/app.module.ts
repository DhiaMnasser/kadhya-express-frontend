import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { HeaderComponent } from './client/header/header.component';
import { HeroSliderComponent } from './client/hero-slider/hero-slider.component';
import { FooterComponent } from './client/footer/footer.component';
import { ShopServiceComponent } from './client/shop-service/shop-service.component';
import { ProductAreaComponent } from './client/product-area/product-area.component';
import { HotProductsComponent } from './client/hot-products/hot-products.component';
import { ShopGridComponent } from './client/shop-grid/shop-grid.component';
import { ShopSidebarComponent } from './client/shop-sidebar/shop-sidebar.component';
import { ShopProductListComponent } from './client/shop-product-list/shop-product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {TemplateFormProductComponent} from './admin/template-form-product/template-form-product.component';
import {ListProductComponent} from './admin/product/list-product/list-product.component';
import { SidenavListComponent } from './admin/sidenav-list/sidenav-list.component';
import { DashProductComponent } from './admin/product/dash-product/dash-product.component';
import { ClientComponent } from './client/client/client.component';
import {AdminDashboardComponent} from './admin/dashboard/admin-dashboard.component';
import { ShoppingCartComponent } from './client/shopping-cart/shopping-cart.component';
import { ProductComponent } from './client/product/product.component';
import { ProductDetailsComponent } from './client/product-details/product-details.component';
import {AgmCoreModule} from '@agm/core';
import { GoogleMapComponent } from './client/google-map/google-map.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroSliderComponent,
    FooterComponent,
    ShopServiceComponent,
    ProductAreaComponent,
    HotProductsComponent,
    ShopGridComponent,
    ShopSidebarComponent,
    ShopProductListComponent,
    PageNotFoundComponent,
    SigninComponent,
    SignupComponent,
    AdminDashboardComponent,
    TemplateFormProductComponent,
    ListProductComponent,
    SidenavListComponent,
    DashProductComponent,
    ClientComponent,
    ShoppingCartComponent,
    ProductComponent,
    ProductDetailsComponent,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgrpK5AUEJWZ3plzzsX5l25J8inJ72o_s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
