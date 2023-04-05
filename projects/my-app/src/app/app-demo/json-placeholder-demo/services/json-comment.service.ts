// ENV
import { environment } from 'projects/my-app/src/enviroments/environment';

// ANGULAR
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { map, Observable } from 'rxjs';

// API
import { setHttpParams } from 'my-library';
import { JSONComment, IJSONComment } from '../models/json-comment.model';

@Injectable({
  providedIn: 'root',
})
export class JsonCommentService {
  constructor(private httpClient: HttpClient) {}

  public getComments(queryParams?: any): Observable<JSONComment[]> {
    const params = setHttpParams(queryParams);
    return this.httpClient
      .get<JSONComment[]>(environment.jsonPlaceholder.apiUrl + 'comments', {
        params,
      })
      .pipe(
        map((data: IJSONComment[]) => {
          const sanitizedData: JSONComment[] = [];
          data.forEach((item: IJSONComment) => {
            sanitizedData.push(new JSONComment(item));
          });
          return sanitizedData;
        })
      );
  }
}
