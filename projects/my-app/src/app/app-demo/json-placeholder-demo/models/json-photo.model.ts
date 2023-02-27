// API

import { IEntityBaseDOM, updateObject } from 'my-library';

export interface IJSONPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export class JSONPhoto implements IJSONPhoto, IEntityBaseDOM<IJSONPhoto> {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  constructor(data: IJSONPhoto) {
    this.patchValues(data);
  }
  patchValues(data: IJSONPhoto): void {
    updateObject(this, data);
  }
}
