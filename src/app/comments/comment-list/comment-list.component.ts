import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/Services/comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: Comment[] = [];
  constructor(
    private commentService: CommentsService
  ) { }

  ngOnInit(): void {
    
  }

}
