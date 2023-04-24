// ANGULAR
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { Observable, map } from 'rxjs';

// ENV
import { environment } from 'projects/my-app/src/enviroments/environment';

// API
import { EStoreProduct, IEStoreProduct } from '../models/e-store-product.model';

@Injectable({
  providedIn: 'root',
})
export class EStoreProductService {
  constructor(private httpClient: HttpClient) {}

  //GET ALL
  public getProducts(catogories?: string[]): Observable<IEStoreProduct[]> {
    return this.httpClient
      .get<IEStoreProduct[]>(environment.eStoreDemo.apiUrl + '/products')
      .pipe(
        map((data: IEStoreProduct[]) => {
          const sanitizedData: IEStoreProduct[] = [];
          data.forEach((item: IEStoreProduct) => {
            sanitizedData.push(new EStoreProduct(item));
          });
          return sanitizedData;
        })
      );
  }

  // GET PRODUCT BY ID
  public getProduct(productId: string): Observable<IEStoreProduct> {
    return this.httpClient.get<IEStoreProduct>(
      environment.eStoreDemo.apiUrl + '/products' + '/' + productId
    );
  }

  // GET CATEGORIES
  public getProductCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(
      environment.eStoreDemo.apiUrl + '/products/categories'
    );
  }

  // GET BY CATEGORY
  public getProductsByCategory(category: string): Observable<IEStoreProduct[]> {
    return this.httpClient
      .get<IEStoreProduct[]>(
        environment.eStoreDemo.apiUrl + '/products/category/' + category
      )
      .pipe(
        map((data: IEStoreProduct[]) => {
          const sanitizedData: IEStoreProduct[] = [];
          data.forEach((item: IEStoreProduct) => {
            sanitizedData.push(new EStoreProduct(item));
          });
          return sanitizedData;
        })
      );
  }
}
