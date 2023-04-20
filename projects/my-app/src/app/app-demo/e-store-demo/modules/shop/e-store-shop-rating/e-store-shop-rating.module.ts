// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { EStoreShopRatingRoutingModule } from './e-store-shop-rating-routing.module';
import { EStoreShopRatingComponent } from './e-store-shop-rating.component';

@NgModule({
  declarations: [EStoreShopRatingComponent],
  exports: [EStoreShopRatingComponent],
  imports: [CommonModule, EStoreShopRatingRoutingModule],
})
export class EStoreShopRatingModule {}
