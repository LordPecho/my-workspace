// ANGULAR
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

// SERVICES
import { JsonCompanyService } from '../../../services/json-company.service';

// API

import { TranslateKeyENUM } from 'my-library';

@Component({
  selector: 'json-company-form-group',
  templateUrl: './json-company-form-group.component.html',
  styleUrls: ['./json-company-form-group.component.scss'],
})
export class JsonCompanyFormGroupComponent implements OnInit {
  // ENUMS
  public get ngxTranslateKeyENUM(): typeof TranslateKeyENUM {
    return TranslateKeyENUM;
  }

  // VAR
  @Input() public dataFormGroup: FormGroup =
    this.jsonCompanyService.formGroup();

  constructor(private jsonCompanyService: JsonCompanyService) {}

  ngOnInit(): void {}
}
