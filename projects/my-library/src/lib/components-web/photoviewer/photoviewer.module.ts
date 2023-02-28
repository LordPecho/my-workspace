// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// API
import { PhotoviewerRoutingModule } from './photoviewer-routing.module';
import { PhotoviewerComponent } from './photoviewer.component';

// ANGULAR MATERIAL
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    PhotoviewerComponent
  ],
  exports:[
    PhotoviewerComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    PhotoviewerRoutingModule
  ]
})
export class PhotoviewerModule { }
