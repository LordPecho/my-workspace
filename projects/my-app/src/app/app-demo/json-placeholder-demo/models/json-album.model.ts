// API

import { IEntityBaseDOM, updateObject } from 'my-library';

export interface IJSONAlbum {
  userId: string;
  id: string;
  title: string;
}

export class JSONAlbum implements IJSONAlbum, IEntityBaseDOM<IJSONAlbum> {
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
