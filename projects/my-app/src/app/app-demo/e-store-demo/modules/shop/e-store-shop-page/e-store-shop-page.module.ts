import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EStoreShopPageRoutingModule } from './e-store-shop-page-routing.module';
import { EStoreShopPageComponent } from './e-store-shop-page.component';


@NgModule({
  declarations: [
    EStoreShopPageComponent
  ],
  imports: [
    CommonModule,
    EStoreShopPageRoutingModule
  ]
})
export class EStoreShopPageModule { }
