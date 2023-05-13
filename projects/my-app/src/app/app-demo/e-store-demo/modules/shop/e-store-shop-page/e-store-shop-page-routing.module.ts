// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// API
import { EStoreShopPageComponent } from './e-store-shop-page.component';

const routes: Routes = [
  {
    path: '',
    component: EStoreShopPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EStoreShopPageRoutingModule {}
