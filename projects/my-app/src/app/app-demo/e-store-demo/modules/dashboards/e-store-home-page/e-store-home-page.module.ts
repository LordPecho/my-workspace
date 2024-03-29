// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { EStoreHomePageRoutingModule } from './e-store-home-page-routing.module';
import { EStoreHomePageComponent } from './e-store-home-page.component';

// MODULES
import { EStoreShopProductMatCardModule } from '../../shop/e-store-shop-product-mat-card/e-store-shop-product-mat-card.module';
import { CartButtonModule } from '../../cart/cart-button/cart-button.module';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';

// 3Lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [EStoreHomePageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatButtonModule,
    EStoreShopProductMatCardModule,
    CartButtonModule,
    EStoreHomePageRoutingModule,
  ],
})
export class EStoreHomePageModule {}
