import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/main/Model/post';
import { User } from 'src/app/main/Model/user';
import { UsersService } from 'src/app/main/Services/users.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  // userId!: number
  @Input() post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };
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
  @Input() i!: number;
  @Output() index =  new EventEmitter; 
  subscription: any;
  constructor(
    private userService: UsersService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.userService.getUserById(this.post.userId).subscribe({
      next: (response) => this.user = response,
      error: (e) =>  console.log(e),
      complete: ()=> console.log("c'est fait")
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  goToPost(id: number){
    const link = ['posts/' + id + '/comments'];
    this.route.navigate(link);
  }

  // getIndex(){
  //   this.index.emit(this.i)
  // }
}
