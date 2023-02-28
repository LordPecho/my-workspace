// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// API
import { JsonCompanyFormGroupRoutingModule } from './json-company-form-group-routing.module';
import { JsonCompanyFormGroupComponent } from './json-company-form-group.component';

// 3Lib
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

//ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    JsonCompanyFormGroupComponent
  ],
  exports: [
    JsonCompanyFormGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    JsonCompanyFormGroupRoutingModule
  ]
})
export class JsonCompanyFormGroupModule { }
