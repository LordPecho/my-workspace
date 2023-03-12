// API

import { Type } from '@angular/core';

export class NGXAdItem {
  constructor(public component: Type<any>, public data: any) {}
}

export class NGXAdComponent {
  [x: string]: any;
}
