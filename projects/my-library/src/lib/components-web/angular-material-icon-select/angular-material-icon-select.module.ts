// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { AngularMaterialIconSelectRoutingModule } from './angular-material-icon-select-routing.module';
import { AngularMaterialIconSelectComponent } from './angular-material-icon-select.component';

// MATERIAL
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AngularMaterialIconSelectComponent
  ],
  exports: [
    AngularMaterialIconSelectComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    AngularMaterialIconSelectRoutingModule
  ]
})
export class AngularMaterialIconSelectModule { }
