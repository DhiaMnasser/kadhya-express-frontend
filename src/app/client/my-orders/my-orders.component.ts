import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {Order} from "../../models/order";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  currentUser: User;
  listOrders: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {

      this.currentUser = new User();
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.orderService.getAllOrders().subscribe(
        (data) => {
          this.listOrders = data.filter(order =>
            !order.etat && order.userId == this.currentUser.id);
          console.log('listOrders' + JSON.stringify(this.listOrders, null, 1));
        }
      );
    }

  deleteItem(order: Order) {
    this.orderService.deleteOrder(order).subscribe();
  }
}
