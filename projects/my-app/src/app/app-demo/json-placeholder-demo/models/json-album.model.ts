// API

import { INGXEntityBaseDOM, updateObject } from 'ngx-core-lib';

export interface IJSONAlbum {
  userId: string;
  id: string;
  title: string;
}

export class JSONAlbum implements IJSONAlbum, INGXEntityBaseDOM<IJSONAlbum> {
  userId: string;
  id: string;

  title: string;
  constructor(data: IJSONAlbum) {
    this.patchValues(data);
  }
  patchValues(data: IJSONAlbum): void {
    updateObject(this, data);
  }
}
