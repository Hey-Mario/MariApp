import { Component, OnInit } from '@angular/core';
import { AutoUnsub } from 'src/app/functions/auto-un-subscription';
import { Post } from '../../../main/Model/post';
import { PostsService } from '../../../main/Services/posts.service';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.css']
})

// @AutoUnsub()
export class ActuComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private postService: PostsService,
  ) { }

  ngOnInit(): void {
    this.postService.getAllPostsList().subscribe(
      (data) => {
        this.posts = data.map(result => {return result})
      }
    )
  }
}
