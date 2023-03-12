// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// API
import { NgxGithubDemoRoutingModule } from './ngx-github-demo-routing.module';
import { NgxGithubDemoComponent } from './ngx-github-demo.component';

// 3lib MODULE
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// MATERIAL
import {MatListModule} from '@angular/material/list';
import { NgxGithubRepoDetailsModule } from './modules/ngx-github-repo-details/ngx-github-repo-details.module';

@NgModule({
  declarations: [
    NgxGithubDemoComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    MatListModule,
    NgxGithubRepoDetailsModule,
    NgxGithubDemoRoutingModule
  ]
})
export class NgxGithubDemoModule { }
