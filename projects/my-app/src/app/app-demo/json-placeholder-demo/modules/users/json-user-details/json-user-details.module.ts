// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonUserDetailsRoutingModule } from './json-user-details-routing.module';
import { JsonUserDetailsComponent } from './json-user-details.component';
import { JsonUserTodosModule } from '../json-user-todos/json-user-todos.module';


//ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

// MODULE


//#lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    JsonUserDetailsComponent
  ],
  exports:[
    JsonUserDetailsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    FlexLayoutModule,
    TranslateModule,
    // JsonUserAlbumsModule,
    // JsonCompanyDetailsModule,
    JsonUserTodosModule,
    JsonUserDetailsRoutingModule
  ]
})
export class JsonUserDetailsModule { }
