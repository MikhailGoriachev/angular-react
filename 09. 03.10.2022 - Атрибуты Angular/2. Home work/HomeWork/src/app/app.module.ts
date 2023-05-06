import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {Task01Component} from './task01/task01.component';
import {BooleanPipe} from "../pipes/BooleanPipe";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        Task01Component,
        BooleanPipe
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
