// ANGULAR
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//API
import { AngularMaterialIconCodeENUM, TranslateKeyENUM } from 'my-library';
import { JSONUser } from '../../../models/json-user.model';
import { JSONPost } from '../../../models/json-post.model';

@Component({
  selector: 'app-json-post-mat-card',
  templateUrl: './json-post-mat-card.component.html',
  styleUrls: ['./json-post-mat-card.component.scss']
})
export class JsonPostMatCardComponent {
  //ENUMS
  public get ngxIconCodeENUM(): typeof AngularMaterialIconCodeENUM {
    return AngularMaterialIconCodeENUM;
  }
  public get ngxTranslateKeyENUM(): typeof TranslateKeyENUM {
    return TranslateKeyENUM;
  }

  // VAR
  public postId: number | undefined = undefined;

  @Input() public avatarUrl: string;
  @Input() public user: JSONUser;
  @Input() public post: JSONPost;
  public isLiked: boolean = false;

  @Output() eventEmitter: EventEmitter<number> = new EventEmitter<number>();

  public get avatarDisplay() {
    return !!this.avatarUrl ? this.avatarUrl : this.defaultAvatarUrl;
  }

  private defaultAvatarUrl: string =
  "assets/img/demo/avatars/noavatar.png";;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
  public navigate(user: JSONUser) {
    this.router.navigate(['users/', user.id], {
      relativeTo: this.activatedRoute,
    });
  }

  // SELECT NEW COMMENT
  public addNewComment(postId: number) {
    this.eventEmitter.emit(postId);
  }
  public like() {
    this.isLiked = !this.isLiked;
  }
}
