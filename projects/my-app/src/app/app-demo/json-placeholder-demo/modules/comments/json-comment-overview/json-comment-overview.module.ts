import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonCommentOverviewRoutingModule } from './json-comment-overview-routing.module';
import { JsonCommentOverviewComponent } from './json-comment-overview.component';


@NgModule({
  declarations: [
    JsonCommentOverviewComponent
  ],
  imports: [
    CommonModule,
    JsonCommentOverviewRoutingModule
  ]
})
export class JsonCommentOverviewModule { }
