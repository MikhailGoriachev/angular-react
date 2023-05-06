import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Task01Component } from './task01/task01.component';
import { Task02Component } from './task02/task02.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Task01Component,
    Task02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
