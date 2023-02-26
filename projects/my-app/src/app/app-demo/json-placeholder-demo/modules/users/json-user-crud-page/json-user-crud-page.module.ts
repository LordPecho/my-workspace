import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonUserCrudPageRoutingModule } from './json-user-crud-page-routing.module';
import { JsonUserCrudPageComponent } from './json-user-crud-page.component';


@NgModule({
  declarations: [
    JsonUserCrudPageComponent
  ],
  imports: [
    CommonModule,
    JsonUserCrudPageRoutingModule
  ]
})
export class JsonUserCrudPageModule { }
