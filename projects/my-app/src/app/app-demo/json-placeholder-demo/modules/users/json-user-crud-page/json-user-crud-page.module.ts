// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonUserCrudPageRoutingModule } from './json-user-crud-page-routing.module';
import { JsonUserCrudPageComponent } from './json-user-crud-page.component';

// MODULES
import { JsonUserDetailsModule } from '../json-user-details/json-user-details.module';
import { JsonUserFormGroupModule } from '../json-user-form-group/json-user-form-group.module';

@NgModule({
  declarations: [JsonUserCrudPageComponent],
  imports: [
    CommonModule,
    JsonUserDetailsModule,
    JsonUserFormGroupModule,
    JsonUserCrudPageRoutingModule,
  ],
})
export class JsonUserCrudPageModule {}
