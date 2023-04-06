// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { NgxGithubInsightRoutingModule } from './ngx-github-insight-routing.module';
import { NgxGithubInsightComponent } from './ngx-github-insight.component';

@NgModule({
  declarations: [NgxGithubInsightComponent],
  exports: [NgxGithubInsightComponent],
  imports: [CommonModule, NgxGithubInsightRoutingModule],
})
export class NgxGithubInsightModule {}
