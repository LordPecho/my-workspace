// API

import { IEntityBaseDOM, updateObject } from 'my-library';

export interface IJSONTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class JSONTodo implements IJSONTodo, IEntityBaseDOM<IJSONTodo> {
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
