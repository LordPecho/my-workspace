// ANGULAR
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

// SERVICES
import { JsonAddressService } from '../../../services/json-address.service';
import { TranslateKeyENUM } from 'my-library';

// API

@Component({
  selector: 'json-address-form-group',
  templateUrl: './json-address-form-group.component.html',
  styleUrls: ['./json-address-form-group.component.scss'],
})
export class JsonAddressFormGroupComponent implements OnInit {
  // ENUMS
  public get ngxTranslateKeyENUM(): typeof TranslateKeyENUM {
    return TranslateKeyENUM;
  }

  // VAR
  @Input() public dataFormGroup: FormGroup =
    this.jsonAddressService.formGroup();

  constructor(private jsonAddressService: JsonAddressService) {}

  ngOnInit(): void {}
}
