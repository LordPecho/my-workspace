// API

import { INGXEntityBaseDOM, updateObject } from 'ngx-core-lib';

export interface IJSONPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class JSONPost implements IJSONPost, INGXEntityBaseDOM<IJSONPost> {
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
