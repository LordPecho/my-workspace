import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonHomePageRoutingModule } from './json-home-page-routing.module';
import { JsonHomePageComponent } from './json-home-page.component';


@NgModule({
  declarations: [
    JsonHomePageComponent
  ],
  imports: [
    CommonModule,
    JsonHomePageRoutingModule
  ]
})
export class JsonHomePageModule { }
