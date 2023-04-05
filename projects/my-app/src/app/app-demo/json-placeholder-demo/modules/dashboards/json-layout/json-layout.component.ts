//ANGULAR
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//ROUTER
import { Router } from '@angular/router';

@Component({
  selector: 'app-json-layout',
  templateUrl: './json-layout.component.html',
  styleUrls: ['./json-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JsonLayoutComponent implements OnInit {
  //VAR
  public list: any[] = [
    {
      title: 'home',
      icon: 'home',
      routerLink: ['/', 'JSON'],
    },
    {
      title: 'user',
      icon: 'supervised_user_circle',
      routerLink: ['/', 'JSON', 'users'],
    },
    {
      title: 'albums',
      icon: 'filter',
      routerLink: ['/', 'JSON', 'albums'],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigate(item: any) {
    this.router.navigate(item);
  }
}
