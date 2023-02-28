// ANGULAR
import { Component, Input, OnInit } from '@angular/core';

// API
import { AngularMaterialIconCodeENUM, TranslateKeyENUM } from 'my-library';
import { JSONUser } from '../../../models/json-user.model';

@Component({
  selector: 'app-json-user-details',
  templateUrl: './json-user-details.component.html',
  styleUrls: ['./json-user-details.component.scss']
})
export class JsonUserDetailsComponent implements OnInit {
  //ENUMS
  public get ngxIconCodeENUM(): typeof AngularMaterialIconCodeENUM {
    return AngularMaterialIconCodeENUM;
  }
  public get ngxTranslateKeyENUM(): typeof TranslateKeyENUM {
    return TranslateKeyENUM;
  }

  // VAR
  @Input() public userId: number;
  @Input() public user: JSONUser;
  @Input() public avatarUrl: string;

  public get avatarDisplay() {
    return !!this.avatarUrl ? this.avatarUrl : this.defaultAvatarUrl;
  }

  private defaultAvatarUrl: string =
   "assets/img/demo/avatars/noavatar.png";
  constructor() {}

  ngOnInit(): void {
    console.log(this.userId)
  }

}
