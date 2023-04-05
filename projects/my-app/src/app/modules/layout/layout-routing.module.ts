//ANGULAR
import { NgModule } from '@angular/core';
//ROUTER
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //EXPORT
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
