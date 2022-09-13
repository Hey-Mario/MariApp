import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../Model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  link = 'https://jsonplaceholder.typicode.com/posts/'
  constructor(
    private http: HttpClient,
  ) { }

  getComments(postId: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.link + postId + '/comments');
  }
  
}
