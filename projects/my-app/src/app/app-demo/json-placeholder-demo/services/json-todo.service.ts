// ENV
import { environment } from 'projects/my-app/src/enviroments/environment';

// ANGULAR
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

// RxJS
import { map, Observable } from 'rxjs';

// API
import { IJSONTodo, JSONTodo } from '../models/json-todo.model';
import { setHttpParams } from 'my-library';

@Injectable({
  providedIn: 'root'
})

export class JsonTodoService {

  constructor(private httpClient: HttpClient) { }

  public getTodos(queryParams?: any): Observable<JSONTodo[]> {
    const params: HttpParams = setHttpParams(queryParams);
    return this.httpClient
      .get<JSONTodo[]>(environment.jsonPlaceholder.apiUrl + 'todos', { params })
      .pipe(
        map((data: IJSONTodo[]) => {
          const sanitizedData: JSONTodo[] = [];
          data.forEach((item: IJSONTodo) => {
            sanitizedData.push(new JSONTodo(item));
          });
          return sanitizedData;
        })
      );
  }

}
