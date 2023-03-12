// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { NgxGithubPullRequestsRoutingModule } from './ngx-github-pull-requests-routing.module';
import { NgxGithubPullRequestsComponent } from './ngx-github-pull-requests.component';

// MODULES
import { NgxGithubListCardModule } from '../ngx-github-list-card/ngx-github-list-card.module';

@NgModule({
  declarations: [NgxGithubPullRequestsComponent],
  exports: [NgxGithubPullRequestsComponent],
  imports: [
    CommonModule,
    NgxGithubListCardModule,
    NgxGithubPullRequestsRoutingModule,
  ],
})
export class NgxGithubPullRequestsModule {}
