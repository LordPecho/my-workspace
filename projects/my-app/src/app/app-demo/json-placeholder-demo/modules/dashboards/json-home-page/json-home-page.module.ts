// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// API
import { JsonHomePageRoutingModule } from './json-home-page-routing.module';
import { JsonHomePageComponent } from './json-home-page.component';

// 3Lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// MODULE
import {
  FilterInputFormControlModule,
} from 'my-library';
import { JsonPostsModule } from '../../posts/json-posts/json-posts.module';

// MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    JsonHomePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    FilterInputFormControlModule,
    JsonPostsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    JsonHomePageRoutingModule
  ]
})
export class JsonHomePageModule { }
