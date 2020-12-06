import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user!: User;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  add(): void{
    this.userService.postUser(this.user).subscribe(
      user => this.user = user
    );
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

