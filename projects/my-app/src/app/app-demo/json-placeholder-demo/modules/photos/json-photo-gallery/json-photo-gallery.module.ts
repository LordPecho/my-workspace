// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonPhotoGalleryRoutingModule } from './json-photo-gallery-routing.module';
import { JsonPhotoGalleryComponent } from './json-photo-gallery.component';
import { PhotoviewerModule } from 'my-library';

@NgModule({
  declarations: [JsonPhotoGalleryComponent],
  exports: [JsonPhotoGalleryComponent],
  imports: [CommonModule, PhotoviewerModule, JsonPhotoGalleryRoutingModule],
})
export class JsonPhotoGalleryModule {}
