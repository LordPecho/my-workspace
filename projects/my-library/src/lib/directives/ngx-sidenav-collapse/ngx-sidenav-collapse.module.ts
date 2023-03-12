// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// APP
import { NGXSidenavCollapseDirective } from './ngx-sidenav-collapse.directive';

@NgModule({
  declarations: [
    NGXSidenavCollapseDirective
  ],
  exports: [
    NGXSidenavCollapseDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class NGXSidenavCollapseModule { }
