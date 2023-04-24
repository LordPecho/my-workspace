import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EStoreProductDetailsPageRoutingModule } from './e-store-product-details-page-routing.module';
import { EStoreProductDetailsPageComponent } from './e-store-product-details-page.component';


@NgModule({
  declarations: [
    EStoreProductDetailsPageComponent
  ],
  imports: [
    CommonModule,
    EStoreProductDetailsPageRoutingModule
  ]
})
export class EStoreProductDetailsPageModule { }
