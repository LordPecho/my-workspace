//ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//API
import { JsonLayoutRoutingModule } from './json-layout-routing.module';
import { JsonLayoutComponent } from './json-layout.component';

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

//TRANSLATE MODULE
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    JsonLayoutComponent
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
    JsonLayoutRoutingModule,
  ],
  exports:[
    JsonLayoutComponent,
  ]
})
export class JsonLayoutModule { }
