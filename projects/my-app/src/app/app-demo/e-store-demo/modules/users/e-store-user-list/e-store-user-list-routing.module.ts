// ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// API
import { EStoreUserListComponent } from './e-store-user-list.component';

const routes: Routes = [
  {
    path: '',
    component: EStoreUserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EStoreUserListRoutingModule {}
