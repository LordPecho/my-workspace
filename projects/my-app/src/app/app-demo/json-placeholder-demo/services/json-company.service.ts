// ANGULAR
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonCompanyService {
  constructor() {}

  public formGroup(): FormGroup {
    return new FormBuilder().group({
      name: [null, Validators.required],
      catchPhrase: [null],
      bs: [null],
    });
  }
}
