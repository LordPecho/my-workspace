// ANGULAR
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxAdHost]',
})
export class NGXAdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
