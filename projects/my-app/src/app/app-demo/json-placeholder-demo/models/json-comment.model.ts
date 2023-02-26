// API

import { INGXEntityBaseDOM, updateObject } from 'ngx-core-lib';

export interface IJSONComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export class JSONComment implements IJSONComment, INGXEntityBaseDOM<IJSONComment> {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  constructor(data: IJSONComment) {
    this.patchValues(data);
  }
  patchValues(data: IJSONComment): void {
    updateObject(this, data);
  }
}
