// ANGULAR
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// API
import { JsonAddressFormGroupRoutingModule } from './json-address-form-group-routing.module';
import { JsonAddressFormGroupComponent } from './json-address-form-group.component';

// 3Lib
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [JsonAddressFormGroupComponent],
  exports: [JsonAddressFormGroupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    JsonAddressFormGroupRoutingModule,
  ],
})
export class JsonAddressFormGroupModule {}
