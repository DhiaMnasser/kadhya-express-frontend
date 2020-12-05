import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

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


}

