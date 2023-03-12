// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// API
import { NgxGithubListCardRoutingModule } from './ngx-github-list-card-routing.module';
import { NgxGithubListCardComponent } from './ngx-github-list-card.component';

// ANGULAR MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatInputModule } from '@angular/material/input';

// 3lib MODULE
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// MODULE
import { FilterInputFormControlModule } from 'my-library';

@NgModule({
  declarations: [NgxGithubListCardComponent],
  exports: [NgxGithubListCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    MatSelectModule,
    MatAutocompleteModule,
    FilterInputFormControlModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    NgxGithubListCardRoutingModule,
  ],
})
export class NgxGithubListCardModule {}
