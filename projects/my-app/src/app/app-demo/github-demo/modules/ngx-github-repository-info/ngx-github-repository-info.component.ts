// ANGULAR
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-github-repository-info',
  templateUrl: './ngx-github-repository-info.component.html',
  styleUrls: ['./ngx-github-repository-info.component.scss'],
})
export class NgxGithubRepositoryInfoComponent implements OnInit {
  // VAR
  // LIST OF GITHUB ABOUT PAGES
  public githubPages: any[] = [
    {
      title: 'ReadMe',
      icon: 'chrome_reader_mode',
    },
    {
      title: 'stars',
      icon: 'star_border',
    },
    {
      title: 'watching',
      icon: 'visibility',
    },
    {
      title: 'forks',
      icon: 'call_split',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
