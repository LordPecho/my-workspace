// ANGULAR
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

// ANGULAR MATERIAL
import { MatFormFieldAppearance } from '@angular/material/form-field';

// API
import { AngularMaterialIconCodeENUM, TranslateKeyENUM } from '../../assests';


@Component({
  selector: 'lib-filter-input-form-control',
  templateUrl: './filter-input-form-control.component.html'
})
export class FilterInputFormControlComponent {
  // VAR
  @Input() public appearance: MatFormFieldAppearance = 'outline';
  @Input() public filterFormControl: FormControl = new FormControl();

  // DOM
  @Input() public label: TranslateKeyENUM = TranslateKeyENUM.COMMON_LABEL_FILTER;
  @Input() public placeholder: TranslateKeyENUM = TranslateKeyENUM.COMMON_LABEL_FILTER_PLACEHOLDER;
  @Input() public prefixIconCode: AngularMaterialIconCodeENUM = AngularMaterialIconCodeENUM.SEARCH;
  @Input() public suffixIconCode: AngularMaterialIconCodeENUM = AngularMaterialIconCodeENUM.CLOSE;


  constructor() {}

  ngOnInit(): void {}

  public clearSearchInput(): void {
    this.filterFormControl.reset();
  }
}
