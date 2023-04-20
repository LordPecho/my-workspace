// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { EStoreShopProductMatCardRoutingModule } from './e-store-shop-product-mat-card-routing.module';
import { EStoreShopProductMatCardComponent } from './e-store-shop-product-mat-card.component';
import { EStoreShopRatingModule } from '../e-store-shop-rating/e-store-shop-rating.module';

//MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// 3lib
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    EStoreShopProductMatCardComponent
  ],
  exports:[
    EStoreShopProductMatCardComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    EStoreShopRatingModule,
    EStoreShopProductMatCardRoutingModule
  ]
})
export class EStoreShopProductMatCardModule { }
