// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// API
import { JsonAlbumCrudPageComponent } from './json-album-crud-page.component';

const routes: Routes = [
  {
    path: '',
    component: JsonAlbumCrudPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonAlbumCrudPageRoutingModule {}
