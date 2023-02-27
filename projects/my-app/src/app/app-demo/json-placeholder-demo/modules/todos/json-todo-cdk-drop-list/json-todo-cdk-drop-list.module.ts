import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonTodoCdkDropListRoutingModule } from './json-todo-cdk-drop-list-routing.module';
import { JsonTodoCdkDropListComponent } from './json-todo-cdk-drop-list.component';


@NgModule({
  declarations: [
    JsonTodoCdkDropListComponent
  ],
  imports: [
    CommonModule,
    JsonTodoCdkDropListRoutingModule
  ]
})
export class JsonTodoCdkDropListModule { }
