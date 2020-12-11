import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-hot-products',
  templateUrl: './hot-products.component.html',
  styleUrls: ['./hot-products.component.css']
})
export class HotProductsComponent implements OnInit {
  listProducts: Product[];

  constructor(private  productService: ProductService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.productService.getProductsWS().subscribe(
      (data: Product[]) => this.listProducts = data
    );
  }

}
