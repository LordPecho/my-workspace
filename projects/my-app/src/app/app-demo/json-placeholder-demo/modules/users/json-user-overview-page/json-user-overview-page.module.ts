import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonUserOverviewPageRoutingModule } from './json-user-overview-page-routing.module';
import { JsonUserOverviewPageComponent } from './json-user-overview-page.component';
import { JsonUserMatTableModule } from '../json-user-mat-table/json-user-mat-table.module';

@NgModule({
  declarations: [JsonUserOverviewPageComponent],
  imports: [
    CommonModule,
    JsonUserMatTableModule,
    JsonUserOverviewPageRoutingModule,
  ],
})
export class JsonUserOverviewPageModule {}
