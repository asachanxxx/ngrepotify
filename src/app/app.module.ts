import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RepotifyModule} from 'repotify'
@NgModule({
  declarations: [
    AppComponent
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
