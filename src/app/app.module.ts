import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { FooterComponent } from './footer/footer.component';
import { ShopServiceComponent } from './shop-service/shop-service.component';
import { ProductAreaComponent } from './product-area/product-area.component';
import { HotProductsComponent } from './hot-products/hot-products.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { ShopProductListComponent } from './shop-product-list/shop-product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
