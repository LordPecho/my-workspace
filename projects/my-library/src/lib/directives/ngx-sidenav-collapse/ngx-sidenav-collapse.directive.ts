// ANGULAR
import {
  Directive,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[NGXSidenavCollapse]'
})
export class NGXSidenavCollapseDirective {

  @HostBinding('class.sidenav-collapsed')
  @Input('NGXSidenavCollapse')
  sidenavCollapse = true;

  @Input() toolbarEnabled: any;

  @HostBinding('class.open')
  open: boolean;

  @HostListener('mouseenter')
  // tslint:disable-next-line: typedef
  onMouseEnter() {
    if (this.sidenavCollapse && this.toolbarEnabled) {
      this.open = true;
    }
  }

  @HostListener('mouseleave')
  // tslint:disable-next-line: typedef
  onMouseLeave() {
    if (this.sidenavCollapse) {
      this.open = false;
    }
  }

  constructor() { }

}
