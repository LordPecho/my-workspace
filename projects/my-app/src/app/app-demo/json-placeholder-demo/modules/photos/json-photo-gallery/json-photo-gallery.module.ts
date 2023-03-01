import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonPhotoGalleryRoutingModule } from './json-photo-gallery-routing.module';
import { JsonPhotoGalleryComponent } from './json-photo-gallery.component';


@NgModule({
  declarations: [
    JsonPhotoGalleryComponent
  ],
  imports: [
    CommonModule,
    JsonPhotoGalleryRoutingModule
  ]
})
export class JsonPhotoGalleryModule { }
