import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {StudentsDbService} from "./services/students-db.service";


@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(StudentsDbService, {delay: 300, passThruUnknownUrl: true}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
