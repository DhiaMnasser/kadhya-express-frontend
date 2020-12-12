import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

class ImageSnippet {
  pending = false;
  status = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product;
  selectedFile: ImageSnippet;

  constructor(private productService: ProductService,  private service: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.product = new Product();
    this.productService.getProductById(this.service.snapshot.params.id).subscribe(prod => this.product = prod);

  }

  save(){
    if( this.selectedFile !== undefined )
      this.product.url = this.selectedFile.src
    this.productService.putProduct(this.product).subscribe(
      prod => {
        this.product = prod;
        this.router.navigate(['/admin/products/product-list']);
      },
      error1 => {
        console.error('error updating user' + error1);
      }
    );
  }

  processFile(imageInput: any) {
    console.log('processFile called');
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log('this.selectedFile.src' + this.selectedFile.src);
      this.selectedFile.pending = true;
    });
    reader.readAsDataURL(file);
  }
}
