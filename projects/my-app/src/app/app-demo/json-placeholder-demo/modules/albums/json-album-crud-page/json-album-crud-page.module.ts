// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { JsonAlbumCrudPageRoutingModule } from './json-album-crud-page-routing.module';
import { JsonAlbumCrudPageComponent } from './json-album-crud-page.component';

// MODULE
import { JsonAlbumDetailsModule } from '../json-album-details/json-album-details.module';


@NgModule({
  declarations: [
    JsonAlbumCrudPageComponent
  ],
  imports: [
    CommonModule,
    JsonAlbumDetailsModule,
    JsonAlbumCrudPageRoutingModule
  ]
})
export class JsonAlbumCrudPageModule { }
