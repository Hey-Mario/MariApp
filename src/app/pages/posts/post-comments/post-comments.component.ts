import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/Model/comment';
import { Post } from 'src/app/Model/post';
import { User } from 'src/app/Model/user';
import { CommentsService } from 'src/app/Services/comments.service';
import { PostsService } from 'src/app/Services/posts.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css'],
})
export class PostCommentsComponent implements OnInit {
  post!: Post;
  postId!: number;
  comments: Comment[] = [];
  postMan!: User;
  constructor(
    private commentService: CommentsService,
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.postService.getPostById(params['id']).subscribe((data) => {
        this.post! = data;
        this.postId = data.id;
        this.userService.getUserById(data.userId).subscribe(
          (result) => this.postMan = result
        )
      })
    });
  }
}
