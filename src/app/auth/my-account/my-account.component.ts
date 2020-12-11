import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  //handling errors in component
  save(){
    this.userService.putUser(this.user).subscribe(data =>
    { localStorage.setItem('currentUser', JSON.stringify(data));
      this.route.navigate(['/home']);
    });
  }
}
