// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { EStoreCartPageRoutingModule } from './e-store-cart-page-routing.module';
import { EStoreCartPageComponent } from './e-store-cart-page.component';


@NgModule({
  declarations: [
    EStoreCartPageComponent
  ],
  imports: [
    CommonModule,
    EStoreCartPageRoutingModule
  ]
})
export class EStoreCartPageModule { }
