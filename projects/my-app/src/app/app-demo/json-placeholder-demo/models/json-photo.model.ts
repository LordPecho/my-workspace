// API

import { INGXEntityBaseDOM, updateObject } from 'ngx-core-lib';

export interface IJSONPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export class JSONPhoto implements IJSONPhoto, INGXEntityBaseDOM<IJSONPhoto> {
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
