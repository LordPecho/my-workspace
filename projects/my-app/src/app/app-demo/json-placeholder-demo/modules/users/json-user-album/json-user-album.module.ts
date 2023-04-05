// ANGULAR
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// API
import { JsonUserAlbumRoutingModule } from './json-user-album-routing.module';
import { JsonUserAlbumComponent } from './json-user-album.component';

// 3Lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// MODULE
import { JsonAlbumMatTableModule } from '../../albums/json-album-mat-table/json-album-mat-table.module';
import { FilterInputFormControlModule } from 'my-library';

@NgModule({
  declarations: [JsonUserAlbumComponent],
  exports: [JsonUserAlbumComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TranslateModule,
    FilterInputFormControlModule,
    JsonAlbumMatTableModule,
    JsonUserAlbumRoutingModule,
  ],
})
export class JsonUserAlbumModule {}
