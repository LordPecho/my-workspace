// API
import { updateObject } from 'my-library';
import { IEStoreAdress } from './e-store-address.model';
import { IEStoreName } from './e-store-name.model';

export interface IEStoreUser {
  address: IEStoreAdress;
  id: number;
  email: string;
  username: string;
  password: string;
  name: IEStoreName;
  phone: string;
  __v: number;
}

export class EStoreUser implements IEStoreUser {
  address: IEStoreAdress;
  id: number;
  email: string;
  username: string;
  password: string;
  name: IEStoreName;
  phone: string;
  __v: number;

  constructor(data: IEStoreUser) {
    this.patchValues(data);
  }
  patchValues?(data: IEStoreUser) {
    updateObject(this, data);
  }
}
