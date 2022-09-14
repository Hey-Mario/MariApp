import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../Model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  link = 'https://jsonplaceholder.typicode.com/albums/'
  constructor(
    private http: HttpClient,
  ) { }

  getPhotos(albumId: number): Observable<Photo[]>{
    return this.http.get<Photo[]>(this.link + albumId + '/photos');
  }
  
}