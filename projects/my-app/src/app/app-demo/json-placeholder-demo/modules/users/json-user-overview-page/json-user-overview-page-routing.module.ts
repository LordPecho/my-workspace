// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// API
import { JsonUserOverviewPageComponent } from './json-user-overview-page.component';

const routes: Routes = [
  {
    path: '',
    component: JsonUserOverviewPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonUserOverviewPageRoutingModule {}
