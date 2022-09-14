import { Component, OnInit } from '@angular/core';
import { Post } from '../../Model/post';
import { PostsService } from '../../Services/posts.service';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.css']
})
export class ActuComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private postService: PostsService,
  ) { }

  ngOnInit(): void {
    this.postService.getAllPostsList().subscribe(
      (data) => {
        this.posts = data.map(result => {return result})
      }
    )
  }
}
