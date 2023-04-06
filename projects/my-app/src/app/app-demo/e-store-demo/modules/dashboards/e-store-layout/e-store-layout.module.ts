// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { EStoreLayoutRoutingModule } from './e-store-layout-routing.module';
import { EStoreLayoutComponent } from './e-store-layout.component';

//MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

// 3lib MODULE
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    EStoreLayoutComponent
  ],
  exports: [
    EStoreLayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatSidenavModule,
    FormsModule,
    TranslateModule,
    FlexLayoutModule,
    EStoreLayoutRoutingModule
  ]
})
export class EStoreLayoutModule { }
