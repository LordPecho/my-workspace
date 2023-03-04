// ANGULAR
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

// ENV
import { environment } from 'projects/my-app/src/enviroments/environment';

// RxJS
import { map, Observable } from 'rxjs';

// API
import { setHttpParams } from 'my-library';
import { IJSONPost, JSONPost } from '../models/json-post.model';


@Injectable({
  providedIn: 'root'
})
export class JsonPostService {

  constructor(private httpClient: HttpClient, private injector: Injector) { }

  public getPosts(queryParams?: any): Observable<JSONPost[]> {
    const params: HttpParams = setHttpParams(queryParams);
    return this.httpClient
      .get<JSONPost[]>(environment.jsonPlaceholder.apiUrl + 'posts', { params })
      .pipe(
        map((data: IJSONPost[]) => {
          const sanitizedData: JSONPost[] = [];
          data.forEach((item: IJSONPost) => {
            sanitizedData.push(new JSONPost(item));
          });
          return sanitizedData;
        })
      );
  }

}
