import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../Model/post';
import { User } from '../Model/user';
import { PostsService } from '../Services/posts.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  posts: Post[] = [];
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
        );
        this.postService.getMyPostsList(params['id']).subscribe(
          (data) => this.posts = data.map(result => {return result})
        );
      }
    })
  }

}
