import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ActuComponent } from './actu/actu.component';
import { ProfilComponent } from './profil/profil.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { ErrorComponent } from './error/error.component';
import { ROUTING } from './app.routing';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { PostCommentsComponent } from './posts/post-comments/post-comments.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentItemComponent } from './comments/comment-item/comment-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActuComponent,
    ProfilComponent,
    TodoListComponent,
    ErrorComponent,
    TodoItemComponent,
    PostListComponent,
    PostItemComponent,
    PostCommentsComponent,
    CommentListComponent,
    CommentItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
