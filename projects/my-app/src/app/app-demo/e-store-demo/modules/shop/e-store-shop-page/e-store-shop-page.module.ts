// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// API
import { EStoreShopPageRoutingModule } from './e-store-shop-page-routing.module';
import { EStoreShopPageComponent } from './e-store-shop-page.component';

// 3Lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// MODULE
import { EStoreShopProductMatCardModule } from '../e-store-shop-product-mat-card/e-store-shop-product-mat-card.module';
import { EStoreShopProductCdkModule } from '../e-store-shop-product-cdk/e-store-shop-product-cdk.module';

// MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [EStoreShopPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    EStoreShopProductMatCardModule,
    EStoreShopProductCdkModule,
    MatFormFieldModule,
    MatSelectModule,
    EStoreShopPageRoutingModule,
  ],
})
export class EStoreShopPageModule {}
