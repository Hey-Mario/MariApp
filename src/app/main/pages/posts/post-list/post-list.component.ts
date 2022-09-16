import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/main/Model/post';

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

}
