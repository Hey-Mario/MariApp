import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/main/Model/post';
import { User } from 'src/app/main/Model/user';
import { UsersService } from 'src/app/main/Services/users.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  i = 10;
  @Input () posts: Post[] = [];
  constructor( ) { }

  ngOnInit(): void {
  }

  showMorePost(){
    this.i += 5
  }

  // getIndex(index: any){
  //   this.i = index
  // }
}
