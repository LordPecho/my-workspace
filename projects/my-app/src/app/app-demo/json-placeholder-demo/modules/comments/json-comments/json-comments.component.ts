// ANGULAR
import { Component, Input} from '@angular/core';

// API
import { JSONComment } from '../../../models/json-comment.model';
import { AngularMaterialIconCodeENUM } from 'my-library';

@Component({
  selector: 'app-json-comments',
  templateUrl: './json-comments.component.html',
  styleUrls: ['./json-comments.component.scss']
})
export class JsonCommentsComponent {
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
