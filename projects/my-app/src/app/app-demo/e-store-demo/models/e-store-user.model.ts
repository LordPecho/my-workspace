// API
import { IEStoreAdress } from "./e-store-address.model";
import { IEStoreName } from "./e-store-name.model";

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
}
