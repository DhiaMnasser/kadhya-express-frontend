import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './client/home/home.component';
import {ShopGridComponent} from './client/shop-grid/shop-grid.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AdminDashboardComponent} from './admin/dashboard/admin-dashboard.component';
import {DashProductComponent} from './admin/product/dash-product/dash-product.component';
import {ListProductComponent} from './admin/product/list-product/list-product.component';
import {ProductDetailsComponent} from './client/product-details/product-details.component';
import {ShoppingCartComponent} from './client/shopping-cart/shopping-cart.component';
import {GoogleMapComponent} from './client/google-map/google-map.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopGridComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: AdminDashboardComponent,
    children: [
      {path: 'products', component: DashProductComponent, outlet: 'admin',
      // children: [
      //   {path: 'product-list', component: ListProductComponent, outlet: 'admin-product'}
      // ]
      },
    ]
  },
  {path: 'product/:id', component: ProductDetailsComponent },
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'map', component: GoogleMapComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
