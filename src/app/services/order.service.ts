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

  activeOrder: Order;
  listOrders: Order[];

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
    return this.http.delete<Order>(this.url + '/' + order.id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  putOrder(order: Order): Observable<Order>{
    return this.http.put<Order>(this.url + '/' + order.id, order).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  getActiveOrder() {
    this.activeOrder = new Order();
    this.getAllOrders().subscribe(
      (data) => {
        this.listOrders = data.filter(order =>
          order.userId == (JSON.parse(localStorage.getItem('currentUser')).id) );
        this.activeOrder = this.listOrders.filter(order => order.etat)[0];
        // this.listItems = this.activeOrder.prodList;

        console.log('listOrders' + JSON.stringify(this.listOrders, null, 1));
        console.log('activeOrder' + JSON.stringify(this.activeOrder, null, 1));
        // console.log('listItems' + JSON.stringify(this.listItems, null, 1));
      }
    );
    console.log('activeOrder' + JSON.stringify(this.activeOrder, null, 1));
    return this.activeOrder;
  }

  //
  // getActiveOrder() {
  //   let activeorder = new Order();
  //   this.getAllOrders().subscribe(
  //     (data) => {
  //       data.filter(order =>
  //         order.etat && order.userId == (JSON.parse(localStorage.getItem('currentUser')).id) );
  //       activeorder = data[0];
  //       console.log('' + data);
  //     }
  //   );
  //   return activeorder;
  // }
  //
  //
}
