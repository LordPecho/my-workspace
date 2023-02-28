// ANGULAR
import { Component, Input, OnInit } from '@angular/core';

// ANGULAR MATERIAL
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

// API
import { JSONTodo } from '../../../models/json-todo.model';

@Component({
  selector: 'app-json-todo-cdk-drop-list',
  templateUrl: './json-todo-cdk-drop-list.component.html',
  styleUrls: ['./json-todo-cdk-drop-list.component.scss'],
})
export class JsonTodoCdkDropListComponent {
  // VAR
  @Input() public todo: JSONTodo[] = [];
  @Input() public done: JSONTodo[] = [];

  constructor() {}

  drop(event: CdkDragDrop<JSONTodo[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
