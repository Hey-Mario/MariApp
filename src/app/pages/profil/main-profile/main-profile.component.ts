import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Model/post';
import { User } from 'src/app/Model/user';
import { PostsService } from 'src/app/Services/posts.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {
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
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.userService.getUserById(params['id']).subscribe(
          (data) => this.user = data
        )
      }
    })
  }
}
