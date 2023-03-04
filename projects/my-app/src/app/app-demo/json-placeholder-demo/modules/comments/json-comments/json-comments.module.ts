// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonCommentsRoutingModule } from './json-comments-routing.module';
import { JsonCommentsComponent } from './json-comments.component';

// ANGULAR MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// 3lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    JsonCommentsComponent
  ],
  exports: [
    JsonCommentsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    JsonCommentsRoutingModule
  ]
})
export class JsonCommentsModule { }
