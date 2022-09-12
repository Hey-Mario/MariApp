import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Model/todo';
import { User } from '../Model/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  
  link = 'https://jsonplaceholder.typicode.com/users/';
  constructor(
    private http: HttpClient
  ) { }

  getMyTodoList(id: number): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.link + id + '/todos');
  }
}
