import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopGridComponent} from './shop-grid/shop-grid.component';
import {SigninComponent} from '../auth/signin/signin.component';
import {SignupComponent} from '../auth/signup/signup.component';
import {ClientComponent} from './client.component';
import {HomeComponent} from './home/home.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {GoogleMapComponent} from './google-map/google-map.component';
import {MyAccountComponent} from '../auth/my-account/my-account.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';

const routes: Routes = [
  { path: '', component: ClientComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'shop', component: ShopGridComponent},
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'my-account', component: MyAccountComponent},
      {path: 'product/:id', component: ProductDetailsComponent },
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'map', component: GoogleMapComponent},
      {path: 'my-orders', component: MyOrdersComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
