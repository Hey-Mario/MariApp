import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Model/post';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  posts: Post[] = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
      this.activatedRoute.parent?.params.subscribe({
        next: (params) => {
          this.postService.getMyPostsList(params['id']).subscribe(
            (data) => this.posts = data.map(result => {return result})
          );
        }
      })
  }

}
