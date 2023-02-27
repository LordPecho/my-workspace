// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonUserFormGroupRoutingModule } from './json-user-form-group-routing.module';
import { JsonUserFormGroupComponent } from './json-user-form-group.component';


@NgModule({
  declarations: [
    JsonUserFormGroupComponent
  ],
  exports:[
    JsonUserFormGroupComponent
  ],
  imports: [
    CommonModule,
    JsonUserFormGroupRoutingModule
  ]
})
export class JsonUserFormGroupModule { }
