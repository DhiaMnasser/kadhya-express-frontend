import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {OrderService} from '../../services/order.service';
import {SearchService} from '../../services/search.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {

  listProducts: Product[];
  displayItFlex: {};
  constructor(private  productService: ProductService, private searchService: SearchService) { }

  ngOnInit(): void {
    if (this.searchService.isSearched) {
      this.listProducts = this.searchService.searchedProducts ;
      this.searchService.isSearched = false;
    } else {
      this.productService.getProductsWS().subscribe(
        (data: Product[]) => this.listProducts = data
      );
    }
    this.setCurrentStyles();
  }

  setListProducts(prodList: Product[]){
    this.listProducts = prodList;
  }
  setCurrentStyles() {
    this.displayItFlex = {
      'display' : 'flex'
    };
  }

}
