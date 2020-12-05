import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/products/';
  constructor(private http: HttpClient) { }

  getProductsWS(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
  deleteProduct(id: number): Observable<any>{
    return this.http.delete(this.url + id);
  }

  postProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.url, product);
  }

  putProduct(product: Product): Observable<Product>{
    console.log('put product called');
    return this.http.put<Product>(this.url + '/' + product.id, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + id); }
}
