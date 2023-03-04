// ANGULAR
import { Component, Input} from '@angular/core';

// API
import { JSONComment } from '../../../models/json-comment.model';
import { AngularMaterialIconCodeENUM } from 'my-library';


@Component({
  selector: 'app-json-posts',
  templateUrl: './json-posts.component.html',
  styleUrls: ['./json-posts.component.scss']
})
export class JsonPostsComponent {
  // ENUMS
  public get iconCodeENUM(): typeof AngularMaterialIconCodeENUM {
    return AngularMaterialIconCodeENUM;
  }

  // VAR
  @Input() public avatarUrl: string;
  @Input() public comments: JSONComment[] = [];
  public isLiked: boolean = false;

  public get avatarDisplay() {
    return !!this.avatarUrl ? this.avatarUrl : this.defaultAvatarUrl;
  }

  private defaultAvatarUrl: string =
  "assets/img/demo/avatars/noavatar.png";;

  constructor() {}

  public like() {
    this.isLiked = !this.isLiked;
  }
}
