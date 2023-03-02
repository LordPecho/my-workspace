import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonPostsRoutingModule } from './json-posts-routing.module';
import { JsonPostsComponent } from './json-posts.component';


@NgModule({
  declarations: [
    JsonPostsComponent
  ],
  imports: [
    CommonModule,
    JsonPostsRoutingModule
  ]
})
export class JsonPostsModule { }
