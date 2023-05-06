import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {Task01Component} from './task01/task01.component';
import {GenderPipe} from "../pipes/GenderPipe";
import {Task02Component} from './task02/task02.component';
import { FilmTableComponent } from './task02/film-table/film-table.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        Task01Component,
        GenderPipe,
        Task02Component,
        FilmTableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
