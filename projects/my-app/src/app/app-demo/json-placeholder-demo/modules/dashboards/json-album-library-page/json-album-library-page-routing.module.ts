// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// API
import { JsonAlbumLibraryPageComponent } from './json-album-library-page.component';

const routes: Routes = [
  {
    path:'',
    component: JsonAlbumLibraryPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonAlbumLibraryPageRoutingModule { }
