import { RouterModule, Routes } from "@angular/router";

const APP_ROUTING: Routes = [

        { path: '', loadChildren: ()=>import('./main/main.module').then(m => m.MainModule) },
        // { path: 'login', component: LoginComponent },
]
  
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
  