import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/order';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean;
  currentUser: User;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') === '' || localStorage.getItem('currentUser') == null) {
      this.isUserLoggedIn = false;
    } else {
      this.isUserLoggedIn = true;
      this.currentUser = new User();
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }
  }


  logOut() {
    localStorage.setItem('currentUser', '');
    location.reload();
  }
}
