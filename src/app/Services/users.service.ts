import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.link);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.link + id)
  }
}
