import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product";
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-shop-sidebar',
  templateUrl: './shop-sidebar.component.html',
  styleUrls: ['./shop-sidebar.component.css']
})
export class ShopSidebarComponent implements OnInit {


  @Output() searchCategoryEvent = new EventEmitter<Product[]>();
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  searchProducts( criteria: string, value: string) {

    this.searchCategoryEvent.emit(this.searchService.searchProducts([], criteria, value));
  }
}
