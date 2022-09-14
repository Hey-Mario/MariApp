import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './directives/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ActuComponent } from './pages/actu/actu.component';
import { TodoListComponent } from './pages/todos/todo-list/todo-list.component';
import { ErrorComponent } from './error/error.component';
import { ROUTING } from './app.routing';
import { TodoItemComponent } from './pages/todos/todo-item/todo-item.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { PostItemComponent } from './pages/posts/post-item/post-item.component';
import { PostCommentsComponent } from './pages/posts/post-comments/post-comments.component';
import { CommentListComponent } from './pages/comments/comment-list/comment-list.component';
import { CommentItemComponent } from './pages/comments/comment-item/comment-item.component';
import { RandomizePipe } from './pipes/randomize.pipe';
import { UserProfileComponent } from './pages/profil/user-profile/user-profile.component';
import { UserAlbumComponent } from './pages/profil/user-album/user-album.component';
import { UserPhotoComponent } from './pages/profil/user-photo/user-photo.component';
import { ProfileNavbarComponent } from './pages/profil/profile-navbar/profile-navbar.component';
import { UserPostComponent } from './pages/profil/user-post/user-post.component';
import { MainProfileComponent } from './pages/profil/main-profile/main-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActuComponent,
    TodoListComponent,
    ErrorComponent,
    TodoItemComponent,
    PostListComponent,
    PostItemComponent,
    PostCommentsComponent,
    CommentListComponent,
    CommentItemComponent,
    RandomizePipe,
    UserProfileComponent,
    UserAlbumComponent,
    UserPhotoComponent,
    ProfileNavbarComponent,
    UserPostComponent,
    MainProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
