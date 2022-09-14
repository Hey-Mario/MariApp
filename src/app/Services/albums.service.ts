import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../Model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  linkUsers = 'https://jsonplaceholder.typicode.com/users/';
  linkAlbums = 'https://jsonplaceholder.typicode.com/albums/'
  constructor(
    private http: HttpClient,
  ) { }

  getMyAlbumsList(id: number): Observable<Album[]>{
    return this.http.get<Album[]>(this.linkUsers + id + '/albums');
  }
  
  getAlbumById(id: number): Observable<Album>{
    return this.http.get<Album>(this.linkAlbums + id);
  }
}
