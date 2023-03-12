// ANGULAR
import { Component, OnInit } from '@angular/core';

// API
import {
  AngularMaterialIconCodeENUM,
  TranslateKeyENUM,
} from 'my-library';

@Component({
  selector: 'app-ngx-github-repo-details',
  templateUrl: './ngx-github-repo-details.component.html',
  styleUrls: ['./ngx-github-repo-details.component.scss'],
})
export class NgxGithubRepoDetailsComponent implements OnInit {
  //ENUMS
  public get ngxIconCodeENUM(): typeof AngularMaterialIconCodeENUM {
    return AngularMaterialIconCodeENUM;
  }
  public get ngxTranslateKeyENUM(): typeof TranslateKeyENUM {
    return TranslateKeyENUM;
  }

  // VAR
  public navItemList: any = [
    {
      icon: this.ngxIconCodeENUM.CODE,
      title: this.ngxTranslateKeyENUM.GITHUB_LABEL_CODE,
    },
    {
      icon: this.ngxIconCodeENUM.ADJUST,
      title: this.ngxTranslateKeyENUM.GITHUB_LABEL_ISSUES,
    },
    {
      icon: this.ngxIconCodeENUM.VERTICAL_ALIGN_BOTTOM,
      title: this.ngxTranslateKeyENUM.GITHUB_LABEL_PULL_REQUESTS,
    },
    {
      icon: this.ngxIconCodeENUM.PLAY_CIRCLE_OUTLINE,
      title: this.ngxTranslateKeyENUM.GITHUB_LABEL_ACTIONS,
    },
    {
      icon: this.ngxIconCodeENUM.APPS,
      title: this.ngxTranslateKeyENUM.GITHUB_LABEL_PROJECTS,
    },
    {
      icon: this.ngxIconCodeENUM.SECURITY,
      title: this.ngxTranslateKeyENUM.GITHUB_LABEL_SECURITY,
    },
    {
      icon: this.ngxIconCodeENUM.INSERT_CHART_OUTLINED,
      title: this.ngxTranslateKeyENUM.GITHUB_LABEL_INSIGHTS,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
