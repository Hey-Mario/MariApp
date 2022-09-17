import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/main/Model/comment';
import { CommentsService } from 'src/app/main/Services/comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

// @AutoUnsub()
export class CommentListComponent implements OnInit {

  @Input() postId!: number;
  comments: Comment[] = [];
  subscription: any;
  constructor(
    private commentService: CommentsService,
  ) { }

  ngOnInit(): void {
    // console.log("post id : " + this.postId)
    this.subscription = this.commentService.getComments(this.postId).subscribe(
      (data) => this.comments = data.map(result => result)
    )

  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
