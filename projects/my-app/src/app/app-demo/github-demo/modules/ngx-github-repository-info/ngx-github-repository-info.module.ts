// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { NgxGithubRepositoryInfoRoutingModule } from './ngx-github-repository-info-routing.module';
import { NgxGithubRepositoryInfoComponent } from './ngx-github-repository-info.component';

// MATERIAL
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NgxGithubRepositoryInfoComponent],
  exports: [NgxGithubRepositoryInfoComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    NgxGithubRepositoryInfoRoutingModule,
  ],
})
export class NgxGithubRepositoryInfoModule {}
