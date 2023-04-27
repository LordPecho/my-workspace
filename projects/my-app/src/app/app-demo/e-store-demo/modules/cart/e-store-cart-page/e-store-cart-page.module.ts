// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { EStoreCartPageRoutingModule } from './e-store-cart-page-routing.module';
import { EStoreCartPageComponent } from './e-store-cart-page.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    EStoreCartPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    EStoreCartPageRoutingModule
  ]
})
export class EStoreCartPageModule { }
