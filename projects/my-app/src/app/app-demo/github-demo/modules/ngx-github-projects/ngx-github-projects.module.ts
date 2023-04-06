// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { NgxGithubProjectsRoutingModule } from './ngx-github-projects-routing.module';
import { NgxGithubProjectsComponent } from './ngx-github-projects.component';

@NgModule({
  declarations: [NgxGithubProjectsComponent],
  exports: [NgxGithubProjectsComponent],
  imports: [CommonModule, NgxGithubProjectsRoutingModule],
})
export class NgxGithubProjectsModule {}
