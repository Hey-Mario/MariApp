import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Model/post';
import { User } from 'src/app/Model/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post!: Post;
  @Input() user!: User;
  constructor(
    private userService: UsersService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.post.userId).subscribe(
        (data) => this.user = data
    )
  }

  goToPost(id: number){
    // this.postId.emit(
    //   this.post.id
    // )
    const link = ['posts/' + id + '/comments'];
    this.route.navigate(link);
  }
}
