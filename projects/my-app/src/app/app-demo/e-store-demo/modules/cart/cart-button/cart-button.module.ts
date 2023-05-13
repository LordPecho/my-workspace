// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { CartButtonRoutingModule } from './cart-button-routing.module';
import { CartButtonComponent } from './cart-button.component';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [CartButtonComponent],
  exports: [CartButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    CartButtonRoutingModule,
  ],
})
export class CartButtonModule {}
