import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../Model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  link = 'http://localhost:3000/albums/'
  constructor(
    private http: HttpClient,
  ) { }

  getPhotos(albumId: number): Observable<Photo[]>{
    return this.http.get<Photo[]>(this.link + albumId + '/photos');
  }
  
}
