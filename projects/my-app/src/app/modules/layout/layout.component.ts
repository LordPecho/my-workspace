//ANGULAR
import { Component, OnInit } from '@angular/core';

//ROUTER
import { Router } from '@angular/router';

//TRANSLATE
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  //VAR
  public logout: string = 'false';

  //menu list
  public menuList: any = [
    {
      title: 'main-nav.button-1.json-site',
      icon: 'account_box',
      routerLink: ['/', 'JSON'],
    },
    {
      title: 'items.details.github',
      icon: 'bug_report',
      routerLink: ['/', 'github'],
    },
    {
      title: 'main-nav.e-store',
      icon: 'shop',
      routerLink: ['/', 'e-store'],
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigate(item: any) {
    this.router.navigate(item);
  }
}
