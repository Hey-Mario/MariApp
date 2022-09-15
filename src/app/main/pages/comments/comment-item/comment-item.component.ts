import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/main/Model/comment';
import { User } from 'src/app/main/Model/user';
import { UsersService } from 'src/app/main/Services/users.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment!: Comment;
  constructor(
  ) { }

  ngOnInit(): void {
    // console.log(this.comment)
  }

}
