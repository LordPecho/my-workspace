import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonUserOverviewPageRoutingModule } from './json-user-overview-page-routing.module';
import { JsonUserOverviewPageComponent } from './json-user-overview-page.component';


@NgModule({
  declarations: [
    JsonUserOverviewPageComponent
  ],
  imports: [
    CommonModule,
    JsonUserOverviewPageRoutingModule
  ]
})
export class JsonUserOverviewPageModule { }
