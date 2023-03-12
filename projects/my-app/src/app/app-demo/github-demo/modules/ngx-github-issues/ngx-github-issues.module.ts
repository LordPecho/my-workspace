// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { NgxGithubIssuesRoutingModule } from './ngx-github-issues-routing.module';
import { NgxGithubIssuesComponent } from './ngx-github-issues.component';

// MODULES
import { NgxGithubListCardModule } from '../ngx-github-list-card/ngx-github-list-card.module';


@NgModule({
  declarations: [NgxGithubIssuesComponent],
  exports: [NgxGithubIssuesComponent],
  imports: [
    CommonModule,
    NgxGithubListCardModule,
    NgxGithubIssuesRoutingModule,
  ],
})
export class NgxGithubIssuesModule {}
