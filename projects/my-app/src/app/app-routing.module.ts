// ANGULAR
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// API
import { LayoutComponent } from './modules/layout/layout.component';
import { JsonLayoutComponent } from './app-demo/json-placeholder-demo/modules/dashboards/json-layout/json-layout.component';
import { MyHomePageComponent } from './modules/my-home-page/my-home-page.component';
import { NgxGithubDemoComponent } from './app-demo/github-demo/ngx-github-demo.component';
import { EStoreDemoComponent } from './app-demo/e-store-demo/e-store-demo.component';
import { EStoreLayoutComponent } from './app-demo/e-store-demo/modules/dashboards/e-store-layout/e-store-layout.component';

const routes: Routes = [
  {
    component: LayoutComponent,
    path: '',
    children: [
      {
        component: JsonLayoutComponent,
        path: 'JSON',
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                './app-demo/json-placeholder-demo/modules/dashboards/json-home-page/json-home-page.module'
              ).then((m) => m.JsonHomePageModule),
          },
          {
            path: 'users',
            loadChildren: () =>
              import(
                './app-demo/json-placeholder-demo/modules/users/json-user-overview-page/json-user-overview-page.module'
              ).then((m) => m.JsonUserOverviewPageModule),
          },
          {
            path: 'users/:userId',
            loadChildren: () =>
              import(
                './app-demo/json-placeholder-demo/modules/users/json-user-crud-page/json-user-crud-page.module'
              ).then((m) => m.JsonUserCrudPageModule),
          },
          {
            path: 'users/:userId/:albumId',
            loadChildren: () =>
              import(
                './app-demo/json-placeholder-demo/modules/albums/json-album-crud-page/json-album-crud-page.module'
              ).then((m) => m.JsonAlbumCrudPageModule),
          },
          {
            path: 'albums',
            loadChildren: () =>
              import(
                './app-demo/json-placeholder-demo/modules/dashboards/json-album-library-page/json-album-library-page.module'
              ).then((m) => m.JsonAlbumLibraryPageModule),
          },
          {
            path: 'albums/:albumId',
            loadChildren: () =>
              import(
                './app-demo/json-placeholder-demo/modules/albums/json-album-crud-page/json-album-crud-page.module'
              ).then((m) => m.JsonAlbumCrudPageModule),
          },
        ],
      },
      {
        component: NgxGithubDemoComponent,
        path: 'github',
        loadChildren: () =>
          import('./app-demo/github-demo/ngx-github-demo.module').then(
            (m) => m.NgxGithubDemoModule
          ),
      },
      {
        component: EStoreLayoutComponent,
        path: 'e-store',
        children: [
          {
            path:'shop',
            loadChildren: () =>
            import('./app-demo/e-store-demo/modules/shop/e-store-shop-page/e-store-shop-page.module').then(
              (m) => m.EStoreShopPageModule
            ),
          },
          {
            path:'cart',
            loadChildren: () =>
            import('./app-demo/e-store-demo/modules/cart/e-store-cart-page/e-store-cart-page.module').then(
              (m) => m.EStoreCartPageModule
            ),
          },
          {
            path:'',
            loadChildren: () =>
            import('./app-demo/e-store-demo/modules/dashboards/e-store-home-page/e-store-home-page.module').then(
              (m) => m.EStoreHomePageModule
            ),
          }
        ]
      },
      {
        component: MyHomePageComponent,
        path: '',
        loadChildren: () =>
          import('./modules/my-home-page/my-home-page.module').then(
            (m) => m.MyHomePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
