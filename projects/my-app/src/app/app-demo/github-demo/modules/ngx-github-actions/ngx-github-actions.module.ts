// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { NgxGithubActionsRoutingModule } from './ngx-github-actions-routing.module';
import { NgxGithubActionsComponent } from './ngx-github-actions.component';

@NgModule({
  declarations: [NgxGithubActionsComponent],
  exports: [NgxGithubActionsComponent],
  imports: [CommonModule, NgxGithubActionsRoutingModule],
})
export class NgxGithubActionsModule {}
