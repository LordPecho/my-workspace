// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { NgxGithubSecurityRoutingModule } from './ngx-github-security-routing.module';
import { NgxGithubSecurityComponent } from './ngx-github-security.component';


@NgModule({
  declarations: [
    NgxGithubSecurityComponent
  ],
  exports: [
    NgxGithubSecurityComponent,
  ],
  imports: [
    CommonModule,
    NgxGithubSecurityRoutingModule
  ]
})
export class NgxGithubSecurityModule { }
