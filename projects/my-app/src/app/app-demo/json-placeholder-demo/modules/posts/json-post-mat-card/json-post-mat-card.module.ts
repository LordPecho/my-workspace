//ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//API
import { JsonPostMatCardRoutingModule } from './json-post-mat-card-routing.module';
import { JsonPostMatCardComponent } from './json-post-mat-card.component';

//ANGULAR MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// 3lib
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    JsonPostMatCardComponent
  ],
  exports: [
    JsonPostMatCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    JsonPostMatCardRoutingModule
  ]
})
export class JsonPostMatCardModule { }
