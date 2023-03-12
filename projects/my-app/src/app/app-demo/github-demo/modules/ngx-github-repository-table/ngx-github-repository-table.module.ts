// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { NgxGithubRepositoryTableRoutingModule } from './ngx-github-repository-table-routing.module';
import { NgxGithubRepositoryTableComponent } from './ngx-github-repository-table.component';

// MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [NgxGithubRepositoryTableComponent],
  exports: [NgxGithubRepositoryTableComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    NgxGithubRepositoryTableRoutingModule,
  ],
})
export class NgxGithubRepositoryTableModule {}
