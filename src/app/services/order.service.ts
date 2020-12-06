import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from '../models/user';
import {Order} from '../models/order';
import {catchError} from 'rxjs/operators';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) { }

  // handling erros in service
  getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  getOrderById(id: number): Observable<Order>{
    return this.http.get<Order>(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  postOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(this.url, order).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  deleteOrder(order: Order): Observable<Order>{
    return this.http.delete<Order>(this.url + '/' + order.ref).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  putOrder(order: Order): Observable<Order>{
    return this.http.put<Order>(this.url + '/' + order.ref, order).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
