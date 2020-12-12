import { Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {Order} from '../../models/order';
import {OrderService} from '../../services/order.service';
import {SearchService} from '../../services/search.service';
import {User} from "../../models/user";

@Component({
  selector: 'app-shop-product-list',
  templateUrl: './shop-product-list.component.html',
  styleUrls: ['./shop-product-list.component.css']
})
export class ShopProductListComponent implements OnInit {

  activeOrder: Order;
  listOrders: Order[];
  @Input() listProducts: Product[];

  constructor( private orderService: OrderService) {

  }

  ngOnInit(): void {
    // search

  //  add to cart
    if (localStorage.getItem('currentUser') !== '') {
      this.activeOrder = new Order();
      this.orderService.getAllOrders().subscribe(
        (data) => {
          this.listOrders = data.filter(order =>
            order.userId == ((JSON.parse(localStorage.getItem('currentUser')) as User).id));
          this.activeOrder = this.listOrders.filter(order => order.etat)[0];
          console.log('prod activeOrder' + JSON.stringify(this.activeOrder, null, 1));

        });


    }
  }

  addToCart(product: Product) {
    const index = this.activeOrder.prodList.findIndex(prod => {
      return prod.title === product.title && prod.price === product.price;
    });
    console.log('addToCart prod activeOrder' + JSON.stringify(product, null, 1));

    console.log('addToCart prod index' + index);

    if (index === -1) {
      const prod = product;
      prod.quantity = 1;
      this.activeOrder.prodList.push(prod);
      this.activeOrder.totalPrice += prod.price;
      console.log('addToCart prod activeOrder' + JSON.stringify(this.activeOrder, null, 1));

    }
    else {
      console.log(this.activeOrder.prodList[index]);
      this.activeOrder.prodList[index].quantity++;
      this.activeOrder.totalPrice += product.price;
      console.log('addToCart prod activeOrder' + JSON.stringify(this.activeOrder, null, 1));

    }
    this.orderService.putOrder(this.activeOrder).subscribe();

  }
}
