// ANGULAR
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-store-layout',
  templateUrl: './e-store-layout.component.html',
  styleUrls: ['./e-store-layout.component.scss'],
})
export class EStoreLayoutComponent {
  constructor(private router: Router) {}
  //VAR
  public list: any[] = [
    {
      title: 'home',
      icon: 'home',
      routerLink: ['/', 'e-store'],
    },
    {
      title: 'shop',
      icon: 'store',
      routerLink: ['/', 'e-store', 'shop'],
    },
  ];

  public navigate(item: any) {
    this.router.navigate(item);
  }
}
