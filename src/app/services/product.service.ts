import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getProductsWS(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  deleteProduct(id: number): Observable<any>{
    return this.http.delete(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  postProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.url, product).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  putProduct(product: Product): Observable<Product>{
    console.log('put product called');
    return this.http.put<Product>(this.url + '/' + product.id, product).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<Product>(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
