import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProducts!: Product[];
  constructor(private  productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsWS().subscribe(
      (data: Product[]) => this.listProducts = data
    );
  }
  delete(id: number): void{
    this.productService.deleteProduct(id).subscribe(
      () => this.listProducts = this.listProducts.filter(product => product.id !== id)
    );
  }
  addProduct(product: Product): void{
    console.log(product);
    this.productService.postProduct(product).subscribe(
      (prod: Product) => this.listProducts.push(prod)
    );
  }

  updateProduct(product: Product): void{
    this.productService.putProduct(product).subscribe(
      (prod: Product)  => console.log(prod)
    );
  }

  incrementLike(product: Product): void {
    console.log('increment like called ');
    this.updateProduct(product);
  }

}
