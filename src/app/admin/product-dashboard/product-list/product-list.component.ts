import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listProducts: Product[];
  @Input() searchQuery: string;

  constructor(private  productService: ProductService) {
  }

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

}
