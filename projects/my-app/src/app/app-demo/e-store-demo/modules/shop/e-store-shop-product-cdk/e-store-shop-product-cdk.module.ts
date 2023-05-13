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

// MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [EStoreShopProductCdkComponent],
  exports: [EStoreShopProductCdkComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    EStoreShopProductMatCardModule,
    EStoreShopProductCdkRoutingModule,
  ],
})
export class EStoreShopProductCdkModule {}
