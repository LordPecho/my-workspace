// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonAlbumDetailsRoutingModule } from './json-album-details-routing.module';
import { JsonAlbumDetailsComponent } from './json-album-details.component';

// MODULE
import { JsonPhotoGalleryModule } from '../../photos/json-photo-gallery/json-photo-gallery.module';

@NgModule({
  declarations: [JsonAlbumDetailsComponent],
  exports: [JsonAlbumDetailsComponent],
  imports: [
    CommonModule,
    JsonPhotoGalleryModule,
    JsonAlbumDetailsRoutingModule,
  ],
})
export class JsonAlbumDetailsModule {}
