import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../Model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  linkUsers = 'http://localhost:3000/users/';
  linkAlbums = 'http://localhost:3000/albums/'
  constructor(
    private http: HttpClient,
  ) { }

  getMyAlbumsList(idUser: number): Observable<Album[]>{
    return this.http.get<Album[]>(this.linkUsers + idUser + '/albums');
  }
  
  getAlbumById(idAlbum: number): Observable<Album>{
    return this.http.get<Album>(this.linkAlbums + idAlbum);
  }
}
