import { Router, RouterModule, Routes } from "@angular/router";
import { ActuComponent } from "./actu/actu.component";
import { ErrorComponent } from "./error/error.component";
import { ProfilComponent } from "./profil/profil.component";
import { TodoListComponent } from "./todos/todo-list/todo-list.component";

const APP_ROUTING: Routes = [
    {path: 'actu', component: ActuComponent},
    {path: '', component: ActuComponent},
    {path: 'todos/:id', component: TodoListComponent},
    {path: 'profile/:id', component: ProfilComponent},
    {path: '**', component: ErrorComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);