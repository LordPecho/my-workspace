// ANGULAR
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// 3lib MODULE
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// API
import { FilterInputFormControlRoutingModule } from './filter-input-form-control-routing.module';
import { FilterInputFormControlComponent } from './filter-input-form-control.component';


@NgModule({
  declarations: [
    FilterInputFormControlComponent
  ],
  exports:[
    FilterInputFormControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FilterInputFormControlRoutingModule
  ]
})
export class FilterInputFormControlModule { }
