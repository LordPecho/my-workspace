// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonPostsRoutingModule } from './json-posts-routing.module';
import { JsonPostsComponent } from './json-posts.component';

// ANGULAR MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// 3lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    JsonPostsComponent
  ],
  exports:[
    JsonPostsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    JsonPostsRoutingModule
  ]
})
export class JsonPostsModule { }
