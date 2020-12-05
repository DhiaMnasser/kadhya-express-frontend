import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-template-form-product',
  templateUrl: './template-form-product.component.html',
  styleUrls: ['./template-form-product.component.css']
})
export class TemplateFormProductComponent implements OnInit {

  // @ts-ignore
  product: Product;
  @Output() saveEvent = new EventEmitter <Product> ();

  constructor() { }

  ngOnInit(): void {
    this.product = new Product();
  }

  save(): void {
    this.product.like = 0;
    console.log(this.product);
    this.saveEvent.emit(this.product);
  }

}
