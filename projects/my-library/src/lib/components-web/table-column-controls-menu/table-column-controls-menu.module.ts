// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { TableColumnControlsMenuRoutingModule } from './table-column-controls-menu-routing.module';
import { TableColumnControlsMenuComponent } from './table-column-controls-menu.component';

// ANGULAR MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

// 3lib MODULE
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    TableColumnControlsMenuComponent
  ],
  exports:[
    TableColumnControlsMenuComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    TableColumnControlsMenuRoutingModule
  ]
})
export class TableColumnControlsMenuModule { }
