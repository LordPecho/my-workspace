// ANGULAR
import { Component, OnInit } from '@angular/core';

interface items {
  cls?: any;
  icon: string;
  name: string;
  commits: string;
  update: string;
  initIcon?: Function;
}

const data: items[] = [
  {
    cls: 'fa-solid',
    icon: 'folder',
    name: '.vscode',
    commits: 'initial commit',
    update: '2 mouths ago',
  },
  {
    cls: 'fa-solid',
    icon: 'folder',
    name: 'src',
    commits: 'Error with duplicate font awesome icon in table',
    update: '2 days ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: '.browserslistrc',
    commits: 'initial commit',
    update: '2 months ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: '.editorconfig',
    commits: 'initial commit',
    update: '2 months ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: '.gitignore',
    commits: 'initial commit',
    update: '2 months ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: 'README.md',
    commits: 'initial commit',
    update: '2 months ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: 'angular.json',
    commits: 'Creating font awesome',
    update: '4 days ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: 'karma.conf.js',
    commits: 'initial commit',
    update: '2 months ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: 'package-lock.json',
    commits: 'Creating font awesome',
    update: '4 days ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: 'package.json',
    commits: 'Creating font awesome',
    update: '4 days ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: 'tsconfig.app.json',
    commits: 'initial commit',
    update: '2 months ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: 'tsconfig.json',
    commits: 'initial commit',
    update: '2 months ago',
  },
  {
    cls: 'fa-regular',
    icon: 'insert_drive_file',
    name: 'tsconfig.spec.json',
    commits: 'initial commit',
    update: '2 months ago',
  },
];

@Component({
  selector: 'ngx-github-repository-table',
  templateUrl: './ngx-github-repository-table.component.html',
  styleUrls: ['./ngx-github-repository-table.component.scss'],
})
export class NgxGithubRepositoryTableComponent implements OnInit {
  displayedColumns: string[] = ['icon', 'name', 'commits', 'update'];
  dataSource = data;
  numbers: number[];

  constructor() {}
  ngOnInit(): void {}
}
