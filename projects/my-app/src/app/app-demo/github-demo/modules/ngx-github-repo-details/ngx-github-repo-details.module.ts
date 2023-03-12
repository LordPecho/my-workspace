// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// API
import { NgxGithubRepoDetailsRoutingModule } from './ngx-github-repo-details-routing.module';
import { NgxGithubRepoDetailsComponent } from './ngx-github-repo-details.component';

// ANGULAR MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

// 3lib MODULE
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

// MODULES
import { NgxGithubTabsModule } from '../ngx-github-tabs/ngx-github-tabs.module';

@NgModule({
  declarations: [
    NgxGithubRepoDetailsComponent
  ],
  exports: [
    NgxGithubRepoDetailsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    NgxGithubTabsModule,
    NgxGithubRepoDetailsRoutingModule
  ]
})
export class NgxGithubRepoDetailsModule { }
