// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonCommentOverviewRoutingModule } from './json-comment-overview-routing.module';
import { JsonCommentOverviewComponent } from './json-comment-overview.component';

//MODULE
import { JsonCommentsModule } from '../json-comments/json-comments.module';

//3Lib
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    JsonCommentOverviewComponent
  ],
  exports: [
    JsonCommentOverviewComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    JsonCommentsModule,
    JsonCommentOverviewRoutingModule
  ]
})
export class JsonCommentOverviewModule { }
