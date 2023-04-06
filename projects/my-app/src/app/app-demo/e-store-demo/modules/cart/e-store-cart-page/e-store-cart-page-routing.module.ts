// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// API
import { EStoreCartPageComponent } from './e-store-cart-page.component';

const routes: Routes = [
  {
    path:'',
    component: EStoreCartPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EStoreCartPageRoutingModule { }
