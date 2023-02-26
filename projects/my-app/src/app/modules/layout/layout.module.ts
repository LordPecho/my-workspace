//ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//API
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

//TRANSLATE
import { TranslateModule } from '@ngx-translate/core';

//FLEX LAYOUT
import { FlexLayoutModule } from '@angular/flex-layout';

//MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    LayoutComponent
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
    LayoutRoutingModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
