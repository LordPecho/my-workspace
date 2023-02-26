// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// API
import { JsonHomePageComponent } from './json-home-page.component';

const routes: Routes = [
{
path:'',
component: JsonHomePageComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonHomePageRoutingModule { }
