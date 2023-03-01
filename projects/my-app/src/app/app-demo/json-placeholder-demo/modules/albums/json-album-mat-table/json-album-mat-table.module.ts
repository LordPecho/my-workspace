import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonAlbumMatTableRoutingModule } from './json-album-mat-table-routing.module';
import { JsonAlbumMatTableComponent } from './json-album-mat-table.component';

// ANGULAR MATERIAL
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// 3lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

//MODULE
import { TableColumnControlsMenuModule } from 'my-library';

@NgModule({
  declarations: [
    JsonAlbumMatTableComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    DragDropModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    TableColumnControlsMenuModule,
    JsonAlbumMatTableRoutingModule
  ]
})
export class JsonAlbumMatTableModule { }
