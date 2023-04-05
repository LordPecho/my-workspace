// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ANGULAR MATERIAL
import { MatCardModule } from '@angular/material/card';

// API
import { JsonPostsRoutingModule } from './json-posts-routing.module';
import { JsonPostsComponent } from './json-posts.component';

// MODULE
import { FlexLayoutModule } from '@angular/flex-layout';
import { JsonCommentOverviewModule } from '../../comments/json-comment-overview/json-comment-overview.module';
import { JsonPostMatCardModule } from '../json-post-mat-card/json-post-mat-card.module';

@NgModule({
  declarations: [JsonPostsComponent],
  exports: [JsonPostsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    JsonPostMatCardModule,
    JsonCommentOverviewModule,
    JsonPostsRoutingModule,
  ],
})
export class JsonPostsModule {}
