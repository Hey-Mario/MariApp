import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Comment } from '../Model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  link = 'http://localhost:3000/posts/'
  constructor(
    private http: HttpClient,
  ) { }

  getComments(postId: number): Promise<Comment[]>{
    return lastValueFrom(this.http.get<Comment[]>(this.link + postId + '/comments'));
  }
  
}
