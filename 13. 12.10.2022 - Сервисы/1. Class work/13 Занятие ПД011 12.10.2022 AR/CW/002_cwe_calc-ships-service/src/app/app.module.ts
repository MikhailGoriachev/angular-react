import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { C1Component } from './c1/c1.component';
import {AppRoutingModule} from "./app-routing.module";
import { C2Component } from './c1/c2/c2.component';
import { C3Component } from './c1/c3/c3.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FleetComponent } from './fleet/fleet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    C1Component,
    C2Component,
    C3Component,
    GalleryComponent,
    FleetComponent
  ],
    imports: [
        BrowserModule, AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
