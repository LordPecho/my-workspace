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

// TRANSLATE
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// MODULES
import { LayoutModule } from './modules/layout/layout.module';
import { JsonLayoutModule } from './app-demo/json-placeholder-demo/modules/dashboards/json-layout/json-layout.module';
import { JsonCommentComponent } from './app-demo/json-placeholder-demo/modules/comments/json-comment/json-comment.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, JsonCommentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    JsonLayoutModule,
        //TRANSLATE
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient],
          }
        }),
    // ALWAYS LAST!
    AppRoutingModule,
  ],
  providers: [JSON_SERVICES_API],
  bootstrap: [AppComponent],
})
export class AppModule {}
