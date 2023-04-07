// API
import { IEStoreGeolocation } from './e-store-geolocation.model';

export interface IEStoreAdress {
  geolocation: IEStoreGeolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}
