// API

import { HttpParams } from "@angular/common/http";

export function setHttpParams(params: any): HttpParams {
  let httpParams: HttpParams = new HttpParams();
  if (!!params) {
    Object.entries(params).forEach((property: any[], index: number) => {
      if (
        property[1] !== null &&
        property[1] !== undefined &&
        property[1] !== ''
      ) {
        if (Array.isArray(property[1])) {
          (property[1] as Array<any>).forEach(
            (element: any, innerIndex: number) => {
              httpParams = httpParams.append(property[0], element);
            }
          );
        } else {
          httpParams = httpParams.set(property[0], property[1]);
        }
      }
    });
  }
  return httpParams;
}

export function updateObject(target: any, source: any): void {
  Object.entries(source).forEach((property: [string, any]) => {
    target[property[0]] = property[1];
  });
}

export function isEmptyObjectValues(obj: any): boolean {
  return Object.values(obj).every((x) => x === null || x === '');
}
