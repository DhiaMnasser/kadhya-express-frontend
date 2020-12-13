import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import {Observable} from 'rxjs';
import {Order} from "../../models/order";
import {User} from "../../models/user";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  activeOrder: Order;
  constructor(private routeService: ActivatedRoute, private productService: ProductService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.productService.getProductById(this.routeService.snapshot.params.id).subscribe( prod => this.product = prod);
    console.log(this.product);
    if (localStorage.getItem('currentUser') !== '') {
      this.activeOrder = new Order();
      this.orderService.getAllOrders().subscribe(
        (data) => {
          const listOrders = data.filter(order =>
            order.userId == ((JSON.parse(localStorage.getItem('currentUser')) as User).id));
          this.activeOrder = listOrders.filter(order => order.etat)[0];
          console.log('prod activeOrder' + JSON.stringify(this.activeOrder, null, 1));

        });


    }
  }

  addToCart() {
    const index = this.activeOrder.prodList.findIndex(prod => {
      return prod.title === this.product.title && prod.price === this.product.price;
    });
    console.log('addToCart prod activeOrder' + JSON.stringify(this.product, null, 1));

    console.log('addToCart prod index' + index);

    if (index === -1) {
      const prod = this.product;
      prod.quantity = 1;
      this.activeOrder.prodList.push(prod);
      this.activeOrder.totalPrice += prod.price;
      console.log('addToCart prod activeOrder' + JSON.stringify(this.activeOrder, null, 1));

    }
    else {
      console.log(this.activeOrder.prodList[index]);
      this.activeOrder.prodList[index].quantity++;
      this.activeOrder.totalPrice += this.product.price;
      console.log('addToCart prod activeOrder' + JSON.stringify(this.activeOrder, null, 1));

    }
    this.orderService.putOrder(this.activeOrder).subscribe();

  }

}
