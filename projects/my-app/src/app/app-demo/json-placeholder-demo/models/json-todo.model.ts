// API

import { INGXEntityBaseDOM, updateObject } from 'ngx-core-lib';

export interface IJSONTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class JSONTodo implements IJSONTodo, INGXEntityBaseDOM<IJSONTodo> {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(data: IJSONTodo) {
    this.patchValues(data);
  }
  patchValues(data: IJSONTodo): void {
    updateObject(this, data);
  }
}
