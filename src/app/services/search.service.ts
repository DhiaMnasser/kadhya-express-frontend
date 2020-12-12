import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from './product.service';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchedProducts: Product[];
  isSearched: boolean;
  constructor(private productService: ProductService, private router: Router) { }


  searchProducts(list: any[], critiria: string, value: any): Product[]{
    console.log('started search ');
    this.productService.getProductsWS().subscribe(products => {
      list = products;
      // console.log('list ' + list);
      this.searchedProducts = list.filter((prod: Product) => prod[critiria].toLowerCase().includes(value.toLowerCase()) );
      this.isSearched = this.searchedProducts.length !== 0;
      console.log('list filtered ' + this.searchedProducts);
      console.log('isSearched ' + this.isSearched );
      this.router.navigate(['./shop']);
    });
    return this.searchedProducts;
  }
}
