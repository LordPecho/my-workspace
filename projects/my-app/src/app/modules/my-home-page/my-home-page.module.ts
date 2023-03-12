// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { MyHomePageRoutingModule } from './my-home-page-routing.module';
import { MyHomePageComponent } from './my-home-page.component';

// MATERIAL
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    MyHomePageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MyHomePageRoutingModule
  ]
})
export class MyHomePageModule { }
