// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// API
import { NGXAdDirective } from './ngx-ad.directive';

@NgModule({
  declarations: [NGXAdDirective],
  exports: [NGXAdDirective],
  imports: [CommonModule],
})
export class NGXAdModule {}
