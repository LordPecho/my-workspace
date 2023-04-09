import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EStoreShopProductMatCardRoutingModule } from './e-store-shop-product-mat-card-routing.module';
import { EStoreShopProductMatCardComponent } from './e-store-shop-product-mat-card.component';


@NgModule({
  declarations: [
    EStoreShopProductMatCardComponent
  ],
  imports: [
    CommonModule,
    EStoreShopProductMatCardRoutingModule
  ]
})
export class EStoreShopProductMatCardModule { }
