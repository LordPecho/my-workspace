// ANGULAR
import { Component, Input, OnInit } from '@angular/core';

// API
import { TranslateKeyENUM } from 'my-library';

@Component({
  selector: 'ngx-github-tabs',
  templateUrl: './ngx-github-tabs.component.html',
  styleUrls: ['./ngx-github-tabs.component.scss'],
})
export class NgxGithubTabsComponent implements OnInit {
  //ENUMS
  public get ngxTranslateKeyENUM(): typeof TranslateKeyENUM {
    return TranslateKeyENUM;
  }

  // VAR
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
