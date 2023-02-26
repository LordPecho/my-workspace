import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonAlbumCrudPageRoutingModule } from './json-album-crud-page-routing.module';
import { JsonAlbumCrudPageComponent } from './json-album-crud-page.component';


@NgModule({
  declarations: [
    JsonAlbumCrudPageComponent
  ],
  imports: [
    CommonModule,
    JsonAlbumCrudPageRoutingModule
  ]
})
export class JsonAlbumCrudPageModule { }
