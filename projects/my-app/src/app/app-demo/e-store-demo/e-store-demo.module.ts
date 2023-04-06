// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { EStoreDemoRoutingModule } from './e-store-demo-routing.module';
import { EStoreDemoComponent } from './e-store-demo.component';

@NgModule({
  declarations: [EStoreDemoComponent],
  imports: [CommonModule, EStoreDemoRoutingModule],
})
export class EStoreDemoModule {}
