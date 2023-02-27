// ENV
import { environment } from 'projects/my-app/src/enviroments/environment';

// ANGULAR
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// RxJS
import { map, Observable } from 'rxjs';

// SERVICES
import { JsonAddressService } from './json-address.service';
import { JsonCompanyService } from './json-company.service';

// API
import { IJSONUser, JSONUser } from '../models/json-user.model';
import { IDataTableColumn, TranslateKeyENUM } from 'my-library';

@Injectable({
  providedIn: 'root'
})
export class JsonUserService {

  constructor(private httpClient: HttpClient,private injector: Injector) { }

    //GET ALL
    public getUsers(): Observable<JSONUser[]>{
      return this.httpClient.get<JSONUser[]>(environment.jsonPlaceholder.apiUrl + 'users')
      .pipe(
        map((userDtoList: IJSONUser[]) => {
          const jsonUserList: JSONUser[] = [];
          userDtoList.forEach((userDto: IJSONUser) => {
            jsonUserList.push(new JSONUser(userDto));
          });
          return jsonUserList;
        })
      );
    }

    public dataTableColumns(): IDataTableColumn[] {
      return [
        { property: 'id', fixVisible: true, visible: true },
        {
          property: 'name',
          fixVisible: false,
          visible: true,
          headerTranslateKey: TranslateKeyENUM.USERS_LABEL_NAME,
        },
        {
          property: 'username',
          fixVisible: false,
          visible: true,
          headerTranslateKey: TranslateKeyENUM.COMMON_LABEL_USERNAME,
        },
        {
          property: 'email',
          fixVisible: false,
          visible: true,
          headerTranslateKey: TranslateKeyENUM.COMMON_LABEL_EMAIL,
        },
        {
          property: 'phone',
          fixVisible: false,
          visible: true,
          headerTranslateKey: TranslateKeyENUM.COMMON_LABEL_PHONE,
        },
        {
          property: 'website',
          fixVisible: false,
          visible: true,
          headerTranslateKey: TranslateKeyENUM.COMMON_LABEL_WEBSITE,
        },
        {
          property: 'company',
          fixVisible: false,
          visible: true,
          headerTranslateKey: TranslateKeyENUM.COMPANY_LABEL_MODEL,
        },
        { property: 'menuActions', fixVisible: true, visible: true },
      ] as IDataTableColumn[];
    }

  public formGroup(): FormGroup {
    const jsonAddressService = this.injector.get(JsonAddressService);
    const jsonCompanyService = this.injector.get(JsonCompanyService);
    return new FormBuilder().group({
      id: [null],
      name: [null, Validators.required],
      username: [null],
      email: [null],
      phone: [null],
      website: [null],
      address: jsonAddressService.formGroup(),
      company: jsonCompanyService.formGroup(),
    });
  }
}
