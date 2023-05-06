import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent, WorkersProcessComponent } from './index';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkersProcessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  /* подключение модуля маршрутизации  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
