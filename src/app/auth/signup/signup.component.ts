import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {map} from 'rxjs/operators';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/order';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private orderServie: OrderService) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  add(): void{

    this.user.isAdmin = false;
    this.userService.postUser(this.user).subscribe(data => {
      const order: Order = new Order();
      const currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
      order.ref = 'ref' + currentUser.username + 'v' + Date.now().valueOf();
      order.userId = currentUser.id;
      order.etat = true;
      order.validated = false;
      order.totalPrice = 0;
      order.prodList = [];
      console.log('currentUser' + currentUser);
      console.log('data' + data );
      console.log('order' + order);
      this.orderServie.postOrder(order).subscribe();
    });
  }
  // add(): void{
  //   map((userInfo: { token: string; user: any; }) => {
  //     localStorage.setItem('token', userInfo.token);
  //     sessionStorage.next(userInfo.user); // <-- pump the value in here
  //     console.log(userInfo.user);
  //     return userInfo.user;
  //   });
  // }

}

