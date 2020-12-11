import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../../models/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {Router} from "@angular/router";

class ImageSnippet {
  pending = false;
  status = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  product: Product ;
  selectedFile: ImageSnippet;

  @Output() saveEvent = new EventEmitter <Product> ();

  constructor(private productService: ProductService, private  router: Router) {
  }

  ngOnInit(): void {

    this.product = new Product();
    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl('', [Validators.required, Validators.min(0) ]),
      quantity: new FormControl('', [Validators.required, Validators.min(0)]),
      category: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {


    Object.assign(this.product, this.productForm.value);
    this.product.url = this.selectedFile.src;
    console.log('this.productForm.value' + this.productForm.value);
    console.log('this.product' + JSON.stringify(this.product, null, 4));
    alert('success \n\n' + JSON.stringify(this.product, null, 4));
    this.productService.postProduct(this.product).subscribe(data =>
      this.router.navigate(['admin/products/product-list']));
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

  reset(): void{
    this.productForm.reset();
  }
}
