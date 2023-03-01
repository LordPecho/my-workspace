// ANGULAR
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// API
import { LayoutComponent } from './modules/layout/layout.component';
import { JsonLayoutComponent } from './app-demo/json-placeholder-demo/modules/dashboards/json-layout/json-layout.component';

const routes: Routes = [
 {
  component: LayoutComponent,
  path:'',
  children:
    [
      {
        component: JsonLayoutComponent,
        path:'JSON',
        children: [
          {
            path: '',
            loadChildren: () => import('./app-demo/json-placeholder-demo/modules/dashboards/json-home-page/json-home-page.module').then(m => m.JsonHomePageModule),
          },
          {
            path: 'users',
            loadChildren: () => import('./app-demo/json-placeholder-demo/modules/users/json-user-overview-page/json-user-overview-page.module').then(m => m.JsonUserOverviewPageModule),
          },
          {
            path: 'users/:userId',
            loadChildren: () => import('./app-demo/json-placeholder-demo/modules/users/json-user-crud-page/json-user-crud-page.module').then(m => m.JsonUserCrudPageModule),
          },
          {
            path:'albums',
            loadChildren: () => import('./app-demo/json-placeholder-demo/modules/albums/json-album-crud-page/json-album-crud-page.module').then(m => m.JsonAlbumCrudPageModule),
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
