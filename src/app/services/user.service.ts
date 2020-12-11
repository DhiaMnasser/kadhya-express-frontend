import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../models/user';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
// import { privateEncrypt } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'http://localhost:3000/users';
  urlRegister = 'http://localhost:3000/register';
  urlLogin = 'http://localhost:3000/login';
  currentUser: User;
  //

  listUsers: User[];

  // handling erros in service
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  getUserByMail(mail: string): Observable<User[]>{
    return this.http.get<User[]>(this.url + '?email=' + mail).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  postUser(user: User){
    return this.http.post<any>(this.urlRegister, user).pipe(
      tap( resp => {
          this.getUserByMail(JSON.parse(atob(resp.accessToken.split('.')[1])).email).subscribe(
            data => {
              let currUser: User = new User();
              currUser = data[0];
              console.log('post User' + JSON.stringify(data));
              console.log('post User' + JSON.stringify(currUser));
              localStorage.setItem('currentUser', JSON.stringify(data[0]));
            });
        }),
      catchError((err) => {
        console.error(err);
        alert(err.error);
        return throwError(err);
      })

    );
  }

  userLogin(user: User){
    return this.http.post<any>(this.urlLogin, user).pipe(
      tap( resp => this.searchUser(JSON.parse(atob(resp.accessToken.split('.')[1])).email)),
      catchError((err) => {
        console.error(err);
        alert(err.error);
        return throwError(err);
      })
    );
  }

  deleteUser(user: User): Observable<User>{
    return this.http.delete<User>(this.url + '/' + user.id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  putUser(user: User): Observable<User>{
    return this.http.put<User>(this.url + '/' + user.id, user).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }



  searchUser(email: string) {
    console.log('search user started');
    this.getAllUsers().subscribe(
      data => {
              data.forEach(value => {
                // console.log(value);
                if (value.email === email){
                  this.currentUser = value;
                  console.log('current user:' + JSON.stringify(this.currentUser));
                  localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                  if (this.currentUser.isAdmin){
                    this.router.navigate(['admin']);
                  } else {this.router.navigate(['home']);}
                }
              });
            }
    );

  }

  getCurrentUser(): User{
    return JSON.parse(localStorage.getItem('currentUser'));
  }

//  !!! handling errors in component see save() function in update-user component
}
