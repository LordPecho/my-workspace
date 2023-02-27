// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonUserDetailsRoutingModule } from './json-user-details-routing.module';
import { JsonUserDetailsComponent } from './json-user-details.component';


@NgModule({
  declarations: [
    JsonUserDetailsComponent
  ],
  exports:[
    JsonUserDetailsComponent
  ],
  imports: [
    CommonModule,
    JsonUserDetailsRoutingModule
  ]
})
export class JsonUserDetailsModule { }
