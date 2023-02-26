//ANGULAR
import { Component, OnInit } from '@angular/core';

//ROUTER
import { Router } from '@angular/router';

//TRANSLATE
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  //VAR
  public logout: string = 'false';

  //menu list
  public menuList: any = [
   {
    preTitle: 'JSON',
    title: 'main-nav.button-1.json-site',
    icon: 'account_box',
    routerLink: ['/', 'JSON'],
   },
   {
    title: 'items.details.calendar',
    icon: 'calendar_today',
    routerLink: ['/', 'calendar'],
    tempText: 'main-nav.button-1.tempText',
   },
   {
    title: 'main-nav.button-1.item',
    icon: 'bug_report',
    routerLink: ['/', 'CHAT'],
    tempText: 'main-nav.button-1.tempText',
   },
  ]
  constructor(
    private router: Router,
  ){

   }

  ngOnInit(): void {
  }


  public navigate(item: any){
   this.router.navigate(item);
  }
}
