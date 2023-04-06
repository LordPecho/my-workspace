// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EStoreDemoComponent } from './e-store-demo.component';

const routes: Routes = [
  {
    path: '',
    component: EStoreDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EStoreDemoRoutingModule {}
