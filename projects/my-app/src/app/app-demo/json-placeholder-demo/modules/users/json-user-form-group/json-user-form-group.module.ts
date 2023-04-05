// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonUserFormGroupRoutingModule } from './json-user-form-group-routing.module';
import { JsonUserFormGroupComponent } from './json-user-form-group.component';

// MODULE
import { JsonCompanyFormGroupModule } from '../../company/json-company-form-group/json-company-form-group.module';
import { JsonAddressFormGroupModule } from '../../address/json-address-form-group/json-address-form-group.module';
import { ReactiveFormsModule } from '@angular/forms';

//3Lib
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [JsonUserFormGroupComponent],
  exports: [JsonUserFormGroupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    JsonCompanyFormGroupModule,
    JsonAddressFormGroupModule,
    JsonUserFormGroupRoutingModule,
  ],
})
export class JsonUserFormGroupModule {}
