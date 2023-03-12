// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonUserMatTableRoutingModule } from './json-user-mat-table-routing.module';
import { JsonUserMatTableComponent } from './json-user-mat-table.component';

// ANGULAR MATERIAL
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

// 3lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    JsonUserMatTableComponent
  ],
  exports: [
    JsonUserMatTableComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    TranslateModule,
    JsonUserMatTableRoutingModule
  ]
})
export class JsonUserMatTableModule { }
