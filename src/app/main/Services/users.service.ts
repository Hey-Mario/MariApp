import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  link = 'https://jsonplaceholder.typicode.com/users/';
  // users: Users[] = [];
  constructor(
    private http:HttpClient,
  ) { 

  }

  users$ = ajax.getJSON(this.link);
  subscribe = this.users$.subscribe({
    next: (data) => {return data},
    error: (err) => console.log(err)
  })

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.link);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.link + id)
  }

  // getUserByEmail(email: string): Observable<User>{
  //   const index = 
  // }

}
