import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  listProducts!: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
