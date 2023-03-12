// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { NgxGithubTabsRoutingModule } from './ngx-github-tabs-routing.module';
import { NgxGithubTabsComponent } from './ngx-github-tabs.component';

// MODULES
import { NgxGithubCodeModule } from '../ngx-github-code/ngx-github-code.module';
import { NgxGithubIssuesModule } from '../ngx-github-issues/ngx-github-issues.module';
import { NgxGithubPullRequestsModule } from '../ngx-github-pull-requests/ngx-github-pull-requests.module';
import { NgxGithubActionsModule } from '../ngx-github-actions/ngx-github-actions.module';
import { NgxGithubInsightModule } from '../ngx-github-insight/ngx-github-insight.module';
import { NgxGithubProjectsModule } from '../ngx-github-projects/ngx-github-projects.module';
import { NgxGithubSecurityModule } from '../ngx-github-security/ngx-github-security.module';

// 3lib MODULE
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NgxGithubTabsComponent],
  exports: [NgxGithubTabsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NgxGithubCodeModule,
    NgxGithubIssuesModule,
    NgxGithubPullRequestsModule,
    NgxGithubActionsModule,
    NgxGithubProjectsModule,
    NgxGithubSecurityModule,
    NgxGithubInsightModule,
    NgxGithubTabsRoutingModule,
  ],
})
export class NgxGithubTabsModule {}
