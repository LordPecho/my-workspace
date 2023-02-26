// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// API
import { MyHomePageComponent } from './my-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyHomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyHomePageRoutingModule { }
