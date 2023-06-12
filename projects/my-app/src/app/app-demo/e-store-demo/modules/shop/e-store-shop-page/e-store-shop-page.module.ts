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
import { EStoreShopProductCdkModule } from '../e-store-shop-product-cdk/e-store-shop-product-cdk.module';
import { CartButtonModule } from '../../cart/cart-button/cart-button.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
    EStoreShopProductCdkModule,
    MatFormFieldModule,
    MatSelectModule,
    CartButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    EStoreShopPageRoutingModule,
  ],
})
export class EStoreShopPageModule {}
