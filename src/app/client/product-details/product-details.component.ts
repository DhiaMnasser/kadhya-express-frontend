import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  constructor(private routeService: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.productService.getProductById(this.routeService.snapshot.params.id).subscribe( prod => this.product = prod);
    console.log(this.product);
  }

}
