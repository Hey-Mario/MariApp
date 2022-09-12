import { Component, Input, OnInit } from '@angular/core';
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
  user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: 0,
      geo: {
        lat: 0,
        lng: 0
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  };
  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.post.userId).subscribe(
        (data) => this.user = data
    )
  }

}
