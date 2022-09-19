import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Comment } from 'src/app/main/Model/comment';
import { Post } from 'src/app/main/Model/post';
import { User } from 'src/app/main/Model/user';
import { CommentsService } from 'src/app/main/Services/comments.service';
import { PostsService } from 'src/app/main/Services/posts.service';
import { UsersService } from 'src/app/main/Services/users.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css'],
})
export class PostCommentsComponent implements OnInit {
  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };
  subscriptionPost: any;
  postId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => this.postId = params['id']
    )
    this.subscriptionPost = this.postService.getPostById(this.postId).then(
       data => {
        this.post = data
      }
    )
    console.log(this.post)

    console.log('the post id: ' + this.postId);
  }
  ngOnDestroy(){
    this.subscriptionPost.unsubscribe()
  }
}
