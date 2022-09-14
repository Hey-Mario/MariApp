import { RouterModule, Routes } from "@angular/router";
import { UserAlbumComponent } from "./profil/user-album/user-album.component";
import { UserPostComponent } from "./profil/user-post/user-post.component";

const PROFIL_ROUTING: Routes = [
    {path: 'profile/:id', children:[
        {path: '', component: UserPostComponent },
        {path: 'posts', component: UserPostComponent },
        {path: 'photos', component: UserAlbumComponent }
    ]}
]

export const profileRouting = RouterModule.forRoot(PROFIL_ROUTING);