// ANGULAR
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

// API
import { TranslateKeyENUM } from 'my-library';

// SERVICES
import { JsonUserService } from '../../../services/json-user.service';

@Component({
  selector: 'app-json-user-form-group',
  templateUrl: './json-user-form-group.component.html',
  styleUrls: ['./json-user-form-group.component.scss'],
})
export class JsonUserFormGroupComponent {
  // ENUMS
  public get ngxTranslateKeyENUM(): typeof TranslateKeyENUM {
    return TranslateKeyENUM;
  }

  // VAR
  @Input() public dataFormGroup: FormGroup = this.jsonUserService.formGroup();
  public get companyFormGroup(): FormGroup {
    return this.dataFormGroup.controls['company'] as FormGroup;
  }
  public get addressFormGroup(): FormGroup {
    return this.dataFormGroup.controls['address'] as FormGroup;
  }
  public get geoFormGroup(): FormGroup {
    return this.addressFormGroup.controls['geo'] as FormGroup;
  }

  public get latitude(): any {
    return this.geoFormGroup.controls['lat'].value as any;
  }
  public get longitude(): any {
    return this.geoFormGroup.controls['lng'].value as any;
  }

  constructor(private jsonUserService: JsonUserService) {}

  ngOnInit(): void {}
}
