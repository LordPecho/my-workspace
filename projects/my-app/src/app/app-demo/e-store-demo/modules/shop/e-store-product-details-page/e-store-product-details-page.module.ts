// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { EStoreProductDetailsPageRoutingModule } from './e-store-product-details-page-routing.module';
import { EStoreProductDetailsPageComponent } from './e-store-product-details-page.component';

// MODULES
import { RatingModule } from 'my-library';

//MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// 3lib
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [EStoreProductDetailsPageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    RatingModule,
    EStoreProductDetailsPageRoutingModule,
  ],
})
export class EStoreProductDetailsPageModule {}
