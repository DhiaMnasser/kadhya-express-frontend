import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {Order} from '../../models/order';
import {OrderService} from '../../services/order.service';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  listItems: Product[];
  listOrders: Order[];
  activeOrder: Order;

  constructor(private productService: ProductService, private orderService: OrderService) { }

  ngOnInit(): void {

    // this.listOrder = new Array<Order>();
    // this.listItems = new Array<Product>();

    this.orderService.getAllOrders().subscribe(
      (data) => {
        this.listOrders = data.filter(order =>
          order.userId == (JSON.parse(localStorage.getItem('currentUser')).id) );
        this.activeOrder = this.listOrders.filter(order => order.etat)[0];
        this.listItems = this.activeOrder.prodList;

        console.log('listOrders' + JSON.stringify(this.listOrders, null, 1));
        console.log('activeOrder' + JSON.stringify(this.activeOrder, null, 1));
        console.log('listItems' + JSON.stringify(this.listItems, null, 1));
      }
    );

    // this.activeOrder = this.orderService.getActiveOrder();
    // this.listItems = this.activeOrder.prodList;

    // console.log(this.listOrders);
    // this.orderService.getAllOrders().subscribe(
    //   (data) => this.listItems = data.filter(order =>
    //     order.etat && order.userId === 2)[0].prodList
    // );
    //
    // this.productService.getProductsWS().subscribe(
    //   data => this.listItems = data
    // );
    console.log(this.listItems);


  }

  deleteItem(index: Product) {
    this.listItems.splice(this.listItems.indexOf(index), 1);
    this.activeOrder.prodList = this.listItems ;
    this.orderService.putOrder(this.activeOrder).subscribe();
    console.log(this.activeOrder.prodList);
  }

  decQuantity(product: Product) {
    console.log('-');
    if (product.quantity > 1){
      const index = this.listItems.indexOf(product);
      this.listItems[index].quantity--;
      this.activeOrder.prodList = this.listItems ;
      this.orderService.putOrder(this.activeOrder).subscribe();
    }
  }

  incQuantity(product: Product) {
    console.log('+');
    this.productService.getProductById(product.id).subscribe(data => {
      if (data.quantity > 1){
        const index = this.listItems.indexOf(product);
        this.listItems[index].quantity++;
        this.activeOrder.prodList = this.listItems ;
        this.orderService.putOrder(this.activeOrder).subscribe();

      }
    });
  }
}
