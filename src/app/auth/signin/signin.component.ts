import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  login(): void{
    this.userService.userLogin(this.user).subscribe(
      data => {
        console.log('token :' + ( JSON.parse(atob(data.accessToken.split('.')[1])) as User));
      }
    );
  }
}
