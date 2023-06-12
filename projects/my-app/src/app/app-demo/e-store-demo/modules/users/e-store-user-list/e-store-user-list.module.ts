// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { EStoreUserListRoutingModule } from './e-store-user-list-routing.module';
import { EStoreUserListComponent } from './e-store-user-list.component';

@NgModule({
  declarations: [EStoreUserListComponent],
  imports: [CommonModule, EStoreUserListRoutingModule],
})
export class EStoreUserListModule {}
