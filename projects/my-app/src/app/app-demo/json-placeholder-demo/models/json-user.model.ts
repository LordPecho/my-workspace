// API

import { INGXEntityBaseDOM, updateObject } from 'ngx-core-lib';
import { IJSONAddress } from './json-address.model';
import { IJSONCompany } from './json-company.model';

export interface IJSONUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IJSONAddress;
  company: IJSONCompany;
}

export class JSONUser implements IJSONUser, INGXEntityBaseDOM<IJSONUser> {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IJSONAddress;
  company: IJSONCompany;

  // DOM
  loading: boolean = false;
  loaded: boolean = false;
  menuActions: any = 'TODO';
  constructor(data: IJSONUser) {
    this.patchValues(data);
  }
  patchValues?(data: IJSONUser): void {
    updateObject(this, data);
  }
}
