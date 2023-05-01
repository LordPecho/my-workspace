// API
import { updateObject } from 'my-library';
import { IEStoreRating } from './e-store-rating.model';

export interface IEStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IEStoreRating;
}

export class EStoreProduct implements IEStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IEStoreRating;
  constructor(data: IEStoreProduct) {
    this.patchValues(data);
  }
  patchValues?(data: IEStoreProduct) {
    updateObject(this, data);
  }
  public get routerLink(): string[] {
    return ['/', 'e-store', 'shop', this.id.toString()] as string[];
  }
}
