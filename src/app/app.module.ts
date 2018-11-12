import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RepotifyModule} from 'repotify';
import { ReportlintComponent } from './core/reportlint/reportlint.component'
@NgModule({
  declarations: [
    AppComponent,
    ReportlintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RepotifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
