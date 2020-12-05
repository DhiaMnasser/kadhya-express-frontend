import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../models/user';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

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

  postUser(user: User): Observable<User>{
    return this.http.post<User>(this.url, user).pipe(
      catchError((err) => {
        console.error(err);
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

//  !!! handling errors in component see save() function in update-user component
}
