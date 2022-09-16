import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  linkUsers = 'http://localhost:3000/users/';
  linkPosts = 'http://localhost:3000/posts/'
  constructor(
    private http: HttpClient,
  ) { }

  getMyPostsList(id: number): Observable<Post[]>{
    return this.http.get<Post[]>(this.linkUsers + id + '/posts');
  }

  getAllPostsList(): Observable<Post[]>{
    return this.http.get<Post[]>(this.linkPosts);
  }

  getPostById(id: number): Observable<Post>{
    return this.http.get<Post>(this.linkPosts + id);
  }
}
