import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonPostMatCardRoutingModule } from './json-post-mat-card-routing.module';
import { JsonPostMatCardComponent } from './json-post-mat-card.component';


@NgModule({
  declarations: [
    JsonPostMatCardComponent
  ],
  imports: [
    CommonModule,
    JsonPostMatCardRoutingModule
  ]
})
export class JsonPostMatCardModule { }
