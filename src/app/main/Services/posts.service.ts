import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
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

  getMyPostsList(id: number): Promise<Post[]>{
    return lastValueFrom(this.http.get<Post[]>(this.linkUsers + id + '/posts'));
  }

  getAllPostsList(): Promise<Post[]>{
    return lastValueFrom(this.http.get<Post[]>(this.linkPosts));
  }

  getPostById(id: number): Promise<Post>{
    return lastValueFrom(this.http.get<Post>(this.linkPosts + id));
  }
}
