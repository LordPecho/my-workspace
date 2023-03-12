// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { NgxGithubCodeRoutingModule } from './ngx-github-code-routing.module';
import { NgxGithubCodeComponent } from './ngx-github-code.component';

// MODULES
import { NgxGithubRepositoryInfoModule } from '../ngx-github-repository-info/ngx-github-repository-info.module';
import { NgxGithubRepositoryTableModule } from '../ngx-github-repository-table/ngx-github-repository-table.module';

// MATERIAl
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

// 3lib MODULE
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NgxGithubCodeComponent],
  exports: [NgxGithubCodeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    NgxGithubRepositoryTableModule,
    NgxGithubRepositoryInfoModule,
    NgxGithubCodeRoutingModule,
  ],
})
export class NgxGithubCodeModule {}
