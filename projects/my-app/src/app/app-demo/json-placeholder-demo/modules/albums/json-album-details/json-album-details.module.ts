import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonAlbumDetailsRoutingModule } from './json-album-details-routing.module';
import { JsonAlbumDetailsComponent } from './json-album-details.component';


@NgModule({
  declarations: [
    JsonAlbumDetailsComponent
  ],
  imports: [
    CommonModule,
    JsonAlbumDetailsRoutingModule
  ]
})
export class JsonAlbumDetailsModule { }
