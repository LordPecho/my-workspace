// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { MyHomePageRoutingModule } from './my-home-page-routing.module';
import { MyHomePageComponent } from './my-home-page.component';

// MODULES
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    MyHomePageComponent
  ],
  imports: [
    CommonModule,
    MyHomePageRoutingModule
  ]
})
export class MyHomePageModule { }
