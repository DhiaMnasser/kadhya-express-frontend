import { Component, OnInit } from '@angular/core';
import {Order} from '../../../models/order';
import {OrderService} from '../../../services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  listOrders: Order[];

  constructor(private orderService: OrderService, private router: Router) {
  }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      data => this.listOrders = data.filter(order => order.etat )
    );
  }

  validate(order: Order) {
    order.validated = true;
    this.orderService.putOrder(order).subscribe();
  }


  delete(order: Order) {
    this.orderService.deleteOrder(order).subscribe(
      data => this.listOrders = this.listOrders.filter(ord => ord.id !== order.id));
    console.log(order);
  }

}
