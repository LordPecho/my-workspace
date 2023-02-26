// ANGULAR
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JsonPostService {

  constructor() { }

  public formGroup(): FormGroup {
    return new FormBuilder().group({
      street: [null],
      suite: [null],
      city: [null],
      zipcode: [null],
      geo: this.geoFormGroup(),
    });
  }

  private geoFormGroup() {
    return new FormBuilder().group({
      lat: [null],
      lng: [null],
    });
  }
}
