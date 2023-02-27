// API

import { IEntityBaseDOM, updateObject } from 'my-library';

export interface IJSONPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class JSONPost implements IJSONPost, IEntityBaseDOM<IJSONPost> {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(data: IJSONPost) {
    this.patchValues(data);
  }
  patchValues(data: IJSONPost): void {
    updateObject(this, data);
  }
}
