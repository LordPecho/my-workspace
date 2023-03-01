// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonAlbumLibraryPageRoutingModule } from './json-album-library-page-routing.module';
import { JsonAlbumLibraryPageComponent } from './json-album-library-page.component';


@NgModule({
  declarations: [
    JsonAlbumLibraryPageComponent
  ],
  imports: [
    CommonModule,
    JsonAlbumLibraryPageRoutingModule
  ]
})
export class JsonAlbumLibraryPageModule { }
