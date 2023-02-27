import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonUserDetailsRoutingModule } from './json-user-details-routing.module';
import { JsonUserDetailsComponent } from './json-user-details.component';


@NgModule({
  declarations: [
    JsonUserDetailsComponent
  ],
  imports: [
    CommonModule,
    JsonUserDetailsRoutingModule
  ]
})
export class JsonUserDetailsModule { }
