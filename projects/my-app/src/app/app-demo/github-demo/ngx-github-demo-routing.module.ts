// ANGULAR
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// API
import { NgxGithubDemoComponent } from './ngx-github-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NgxGithubDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxGithubDemoRoutingModule { }
