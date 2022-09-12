import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/Model/todo';
import { TodosService } from 'src/app/Services/todos.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  userId!: number;
  todos: Todo[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodosService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => this.userId = params['id']
    )
    this.todoService.getMyTodoList(this.userId).subscribe(
        (data) => {
          this.todos = data.map(results => {return results;})
        }
    )
  }

}
