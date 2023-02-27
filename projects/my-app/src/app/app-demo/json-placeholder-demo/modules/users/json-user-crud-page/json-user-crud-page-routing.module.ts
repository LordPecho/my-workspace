// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// API
import { JsonUserCrudPageComponent } from './json-user-crud-page.component';

const routes: Routes = [
  {
    path: '',
    component: JsonUserCrudPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonUserCrudPageRoutingModule { }
