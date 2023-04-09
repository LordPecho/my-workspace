import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EStoreShopProductCdkRoutingModule } from './e-store-shop-product-cdk-routing.module';
import { EStoreShopProductCdkComponent } from './e-store-shop-product-cdk.component';


@NgModule({
  declarations: [
    EStoreShopProductCdkComponent
  ],
  imports: [
    CommonModule,
    EStoreShopProductCdkRoutingModule
  ]
})
export class EStoreShopProductCdkModule { }
