// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// API
import { EStoreProductDetailsPageComponent } from './e-store-product-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: EStoreProductDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EStoreProductDetailsPageRoutingModule {}
