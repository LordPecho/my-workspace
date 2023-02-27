import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonUserTodosRoutingModule } from './json-user-todos-routing.module';
import { JsonUserTodosComponent } from './json-user-todos.component';


@NgModule({
  declarations: [
    JsonUserTodosComponent
  ],
  imports: [
    CommonModule,
    JsonUserTodosRoutingModule
  ]
})
export class JsonUserTodosModule { }
