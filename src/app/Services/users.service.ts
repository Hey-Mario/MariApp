import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Model/users';

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

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.link);
  }

  getUserById(id: number): Observable<Users>{
    return this.http.get<Users>(this.link + id)
  }
}
