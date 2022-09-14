import { Router, RouterModule, Routes } from '@angular/router';
import { ActuComponent } from './pages/actu/actu.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { PostCommentsComponent } from './pages/posts/post-comments/post-comments.component';
import { UserAlbumComponent } from './pages/profil/user-album/user-album.component';
import { UserPostComponent } from './pages/profil/user-post/user-post.component';
import { UserProfileComponent } from './pages/profil/user-profile/user-profile.component';
import { TodoListComponent } from './pages/todos/todo-list/todo-list.component';
import { MainProfileComponent } from './pages/profil/main-profile/main-profile.component';
import { LoginComponent } from './directives/login/login.component';

const APP_ROUTING: Routes = [
  // {path: '',component: AppComponent,
  //   children: [
    { path: '', redirectTo:'actu', pathMatch:"full" },
    { path: 'login', component: LoginComponent },
      { path: 'actu', component: ActuComponent },
      { path: 'posts/:id/comments', component: PostCommentsComponent },
      { path: 'todos/:id', component: TodoListComponent },
      {path: 'profile/:id',component: MainProfileComponent,
        children: [
          { path: '', redirectTo:'posts', pathMatch:"full" },
          { path: 'posts', component: UserPostComponent },
          { path: 'photos', component: UserAlbumComponent },
        ],
      },
    // ]},
  { path: '**', component: ErrorComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
