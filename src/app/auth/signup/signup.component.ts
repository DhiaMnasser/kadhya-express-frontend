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

    });
  }


}

