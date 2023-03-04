// ANGULAR
import { Component, Input } from '@angular/core';

// API
import { JSONPost } from '../../../models/json-post.model';


@Component({
  selector: 'app-json-posts',
  templateUrl: './json-posts.component.html',
  styleUrls: ['./json-posts.component.scss']
})
export class JsonPostsComponent {
  @Input() data: any[] = [];
  @Input() loadedPostId: number;
  @Input() isUserSelected: boolean = false;

  public postIdList: number[] = [];

  // LOAD POSTS
  public loadPosts(post: JSONPost) {
    if (post.id <= this.loadedPostId || this.isUserSelected === true) {
      return true;
    } else {
      return false;
    }
  }

  // COMMENT LOGIC
  // ADD POST ID
  public addPostId(postId: number) {
    if (this.postIdList.includes(postId)) {
      const index: number = this.postIdList.indexOf(postId);
      this.postIdList.splice(index, 1);
    } else {
      this.postIdList.push(postId);
    }
    console.log(this.postIdList);
  }

  public commentIsSelected(post: JSONPost) {
    if (this.postIdList.includes(post.id)) {
      return true;
    } else {
      return false;
    }
  }
  public getPostId(postId: number) {
    const index: number = this.postIdList.indexOf(postId);
    return this.postIdList[index];
  }
}
