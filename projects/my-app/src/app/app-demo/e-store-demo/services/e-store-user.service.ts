// ANGULAR
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS
import { Observable, map } from 'rxjs';

//ENV
import { environment } from 'projects/my-app/src/enviroments/environment';

//API
import { EStoreUser, IEStoreUser } from '../models/e-store-user.model';

@Injectable({
  providedIn: 'root',
})
export class EStoreUserService {
  constructor(private httpClient: HttpClient) {}

  //GET ALL
  public getUsers(): Observable<IEStoreUser[]> {
    return this.httpClient
      .get<IEStoreUser[]>(environment.eStoreDemo.apiUrl + '/users')
      .pipe(
        map((data: IEStoreUser[]) => {
          const sanitizedData: IEStoreUser[] = [];
          data.forEach((item: IEStoreUser) => {
            sanitizedData.push(new EStoreUser(item));
          });
          return sanitizedData;
        })
      );
  }

  // GET USER BY ID
  public getUser(userId: string): Observable<IEStoreUser> {
    return this.httpClient.get<IEStoreUser>(
      environment.eStoreDemo.apiUrl + '/users' + '/' + userId
    );
  }
}
