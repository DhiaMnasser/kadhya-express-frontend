import {Component, EventEmitter,  OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  productSearched: string;
  constructor() { }

  ngOnInit(): void {
    this.productSearched = '' ;
  }

}
