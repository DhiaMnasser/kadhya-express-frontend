import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product";
import {SearchService} from '../../services/search.service';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-shop-sidebar',
  templateUrl: './shop-sidebar.component.html',
  styleUrls: ['./shop-sidebar.component.css']
})
export class ShopSidebarComponent implements OnInit {


  @Output() searchCategoryEvent = new EventEmitter<Product[]>();
  constructor(private searchService: SearchService, private  productService: ProductService) { }

  ngOnInit(): void {
  }

  searchProducts( criteria: string, value: string) {
    if (criteria === ''){ this.productService.getProductsWS()
      .subscribe(data => this.searchCategoryEvent.emit(data))}
    else {
      this.searchCategoryEvent.emit(this.searchService.searchProducts([], criteria, value));
    }
  }
}
