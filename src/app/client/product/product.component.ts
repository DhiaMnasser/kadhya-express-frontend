import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() notification = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.notification.emit(this.product);
  }
}
