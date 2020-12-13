import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/order';
import {SearchService} from '../../services/search.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean;
  currentUser: User;
  searchedProducts: string;
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') === '' || localStorage.getItem('currentUser') == null) {
      this.isUserLoggedIn = false;
    } else {
      this.isUserLoggedIn = true;
      this.currentUser = new User();
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  searchProducts(criteria: string, value: string){
    console.log(criteria + ' + ' + value);
    console.log('header ' + this.searchedProducts);
    this.searchService.searchProducts([], criteria, value);
  }

  logOut() {
    localStorage.setItem('currentUser', '');
    this.router.navigate(['home']);
  }
}
