// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// API
import { JsonUserTodosRoutingModule } from './json-user-todos-routing.module';
import { JsonUserTodosComponent } from './json-user-todos.component';

// MODULE
import { JsonTodoCdkDropListModule } from '../../todos/json-todo-cdk-drop-list/json-todo-cdk-drop-list.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    JsonUserTodosComponent
  ],
  exports:[
    JsonUserTodosComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    JsonTodoCdkDropListModule,
    JsonUserTodosRoutingModule
  ]
})
export class JsonUserTodosModule { }
