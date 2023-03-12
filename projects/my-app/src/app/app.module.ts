// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//HTTP
import { HttpClient, HttpClientModule } from '@angular/common/http';

// API
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JSON_SERVICES_API } from './app-demo/json-placeholder-demo/services/index.service';
import { GITHUB_SERVICES_API } from './app-demo/github-demo/services';

// TRANSLATE
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// MODULES
import { LayoutModule } from './modules/layout/layout.module';
import { JsonLayoutModule } from './app-demo/json-placeholder-demo/modules/dashboards/json-layout/json-layout.module';
import { MatSelectModule } from '@angular/material/select';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    LayoutModule,
    JsonLayoutModule,
    //TRANSLATE
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    // ALWAYS LAST!
    AppRoutingModule,
  ],
  providers: [
    { provide: Window, useValue: window },
    JSON_SERVICES_API,
    GITHUB_SERVICES_API,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
