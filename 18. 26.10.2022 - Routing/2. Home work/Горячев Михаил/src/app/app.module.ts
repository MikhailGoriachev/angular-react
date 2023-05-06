import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';

import {Task01Module} from "./task01/task01.module";


@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        Task01Module,
        BrowserModule,
        HttpClientModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
