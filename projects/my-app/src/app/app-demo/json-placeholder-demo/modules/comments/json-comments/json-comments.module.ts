import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonCommentsRoutingModule } from './json-comments-routing.module';
import { JsonCommentsComponent } from './json-comments.component';


@NgModule({
  declarations: [
    JsonCommentsComponent
  ],
  imports: [
    CommonModule,
    JsonCommentsRoutingModule
  ]
})
export class JsonCommentsModule { }
