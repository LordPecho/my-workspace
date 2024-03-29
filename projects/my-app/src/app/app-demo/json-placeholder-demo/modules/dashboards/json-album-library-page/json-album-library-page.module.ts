// ANGULAR
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// API
import { JsonAlbumLibraryPageRoutingModule } from './json-album-library-page-routing.module';
import { JsonAlbumLibraryPageComponent } from './json-album-library-page.component';

// 3Lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// MODULE
import { FilterInputFormControlModule } from 'my-library';
import { JsonAlbumMatTableModule } from '../../albums/json-album-mat-table/json-album-mat-table.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [JsonAlbumLibraryPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TranslateModule,
    FilterInputFormControlModule,
    JsonAlbumMatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    JsonAlbumLibraryPageRoutingModule,
  ],
})
export class JsonAlbumLibraryPageModule {}
