import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {Task01Component} from './task01/task01.component';
import {C1Component} from './task01/c1/c1.component';
import {C2Component} from "./task01/c1/c3/c2/c2.component";
import {C3Component} from "./task01/c1/c3/c3.component";
import { Task02Component } from './task02/task02.component';
import { Task03Component } from './task03/task03.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        Task01Component,
        C1Component,
        C2Component,
        C3Component,
        Task02Component,
        Task03Component,
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
