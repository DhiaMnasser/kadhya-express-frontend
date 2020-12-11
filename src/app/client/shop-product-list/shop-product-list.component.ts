import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {Order} from '../../models/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-shop-product-list',
  templateUrl: './shop-product-list.component.html',
  styleUrls: ['./shop-product-list.component.css']
})
export class ShopProductListComponent implements OnInit {
  listProducts!: Product[];
  constructor(private  productService: ProductService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.productService.getProductsWS().subscribe(
      (data: Product[]) => this.listProducts = data
    );
  }

  addToCart(order: Order) {
    console.log('home order' + order.id);
    this.orderService.putOrder(order).subscribe();
  }
}
