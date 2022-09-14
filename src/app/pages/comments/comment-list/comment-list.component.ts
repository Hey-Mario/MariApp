import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/Model/comment';
import { Post } from 'src/app/Model/post';
import { CommentsService } from 'src/app/Services/comments.service';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() postId!: number;
  comments: Comment[] = [];
  constructor(
    private commentService: CommentsService,
  ) { }

  ngOnInit(): void {
    this.commentService.getComments(this.postId).subscribe(
      (data) => this.comments = data.map(result => result)
    )
  }

}
