import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EStoreHomePageRoutingModule } from './e-store-home-page-routing.module';
import { EStoreHomePageComponent } from './e-store-home-page.component';


@NgModule({
  declarations: [
    EStoreHomePageComponent
  ],
  imports: [
    CommonModule,
    EStoreHomePageRoutingModule
  ]
})
export class EStoreHomePageModule { }
