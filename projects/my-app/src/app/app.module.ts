// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//HTTP
import { HttpClientModule } from '@angular/common/http';

// API
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// TRANSLATE
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from './modules/layout/layout.module';
import { JsonLayoutModule } from './app-demo/json-placeholder-demo/modules/dashboards/json-layout/json-layout.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    JsonLayoutModule,
    // ALWAYS LAST!
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
