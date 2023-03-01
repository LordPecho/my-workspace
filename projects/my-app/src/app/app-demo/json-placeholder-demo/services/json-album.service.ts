// ENV
import { environment } from 'projects/my-app/src/enviroments/environment';

// ANGULAR
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

// RxJS
import { map, Observable } from 'rxjs';

// API
import {
  IDataTableColumn,
  TranslateKeyENUM,
  setHttpParams,
} from 'my-library';
import { JSONAlbum, IJSONAlbum } from '../models/json-album.model';
import { IJSONPhoto, JSONPhoto } from '../models/json-photo.model';
@Injectable({
  providedIn: 'root'
})
export class JsonAlbumService {

  constructor(private httpClient: HttpClient, private injector: Injector) { }

  public getAlbums(queryParams?: any): Observable<JSONAlbum[]> {
    const params: HttpParams = setHttpParams(queryParams);
    return this.httpClient
      .get<JSONAlbum[]>(environment.jsonPlaceholder.apiUrl + 'albums', {
        params,
      })
      .pipe(
        map((data: IJSONAlbum[]) => {
          const sanitizedData: JSONAlbum[] = [];
          data.forEach((item: IJSONAlbum) => {
            sanitizedData.push(new JSONAlbum(item));
          });
          return sanitizedData;
        })
      );
  }

  public getUserAlbums(queryParams?: any): Observable<IJSONAlbum[]> {
    const params: HttpParams = setHttpParams(queryParams);
    return this.httpClient
      .get<IJSONAlbum[]>(environment.jsonPlaceholder.apiUrl + 'albums', {
        params,
      })

  }

  public getAlbum(albumId: string): Observable<IJSONAlbum> {
    return this.httpClient.get<IJSONAlbum>(
      environment.jsonPlaceholder.apiUrl + 'albums' + '/' + albumId
    );
  }

  public getAlbumPhotos(albumId: string): Observable<JSONPhoto[]> {
    return this.httpClient
      .get<IJSONPhoto[]>(
        environment.jsonPlaceholder.apiUrl +
          'albums' +
          '/' +
          albumId +
          '/photos'
      )
      .pipe(
        map((data: IJSONPhoto[]) => {
          const sanitizedData: JSONPhoto[] = [];
          data.forEach((item: IJSONPhoto) => {
            sanitizedData.push(new JSONPhoto(item));
          });
          return sanitizedData;
        })
      );
  }

  public dataTableColumns(): IDataTableColumn[] {
    return [
      {
        property: 'userId',
        fixVisible: true,
        visible: true,
      },
      {
        property: 'title',
        fixVisible: true,
        visible: true,
        headerTranslateKey: TranslateKeyENUM.COMMON_LABEL_TITLE,
      },
      { property: 'id', fixVisible: true, visible: true },
    ] as IDataTableColumn[];
  }
}
