import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { randomize } from 'src/app/functions/randomize.function';
import { Post } from 'src/app/main/Model/post';
import { RandomizePipe } from 'src/app/main/pipes/randomize.pipe';
import { PostsService } from 'src/app/main/Services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = [];
  subscription : any;
  observer = new Observable
  i: number = 10;
  constructor(
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    // if(!this.posts){
      
    // }
    const source = interval(1000);
    this.subscription = source.subscribe(val => console.log(val));
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  showMorePost() {
    this.i += 5;
  }
}
