// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonTodoCdkDropListRoutingModule } from './json-todo-cdk-drop-list-routing.module';
import { JsonTodoCdkDropListComponent } from './json-todo-cdk-drop-list.component';

// ANGULAR MATERIAL
import { DragDropModule } from '@angular/cdk/drag-drop';

// 3Lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    JsonTodoCdkDropListComponent
  ],
  exports: [
    JsonTodoCdkDropListComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    DragDropModule,
    JsonTodoCdkDropListRoutingModule
  ]
})
export class JsonTodoCdkDropListModule { }
