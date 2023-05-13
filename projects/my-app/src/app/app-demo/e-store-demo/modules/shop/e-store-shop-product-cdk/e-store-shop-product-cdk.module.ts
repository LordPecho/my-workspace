// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// API
import { EStoreShopProductCdkRoutingModule } from './e-store-shop-product-cdk-routing.module';
import { EStoreShopProductCdkComponent } from './e-store-shop-product-cdk.component';

// 3Lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// MODULE
import { FilterInputFormControlModule } from 'my-library';
import { EStoreShopProductMatCardModule } from '../e-store-shop-product-mat-card/e-store-shop-product-mat-card.module';
import { CartButtonModule } from '../../cart/cart-button/cart-button.module';

@NgModule({
  declarations: [EStoreShopProductCdkComponent],
  exports: [EStoreShopProductCdkComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    CartButtonModule,
    EStoreShopProductMatCardModule,
    EStoreShopProductCdkRoutingModule,
  ],
})
export class EStoreShopProductCdkModule {}
