import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ActuComponent } from './actu/actu.component';
import { ProfilComponent } from './profil/profil.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ErrorComponent } from './error/error.component';
import { ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActuComponent,
    ProfilComponent,
    TodoListComponent,
    ErrorComponent,
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
