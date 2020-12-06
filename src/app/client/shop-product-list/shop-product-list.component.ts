import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-shop-product-list',
  templateUrl: './shop-product-list.component.html',
  styleUrls: ['./shop-product-list.component.css']
})
export class ShopProductListComponent implements OnInit {
  listProducts!: Product[];
  constructor(private  productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsWS().subscribe(
      (data: Product[]) => this.listProducts = data
    );
  }

  addToCart($event: any) {
    return null;
  }
}
