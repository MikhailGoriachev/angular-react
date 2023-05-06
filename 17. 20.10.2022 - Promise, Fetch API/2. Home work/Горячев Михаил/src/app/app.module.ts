import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';

import {Task01Module} from "./task01/task01.module";
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
        Task01Module,
        InMemoryWebApiModule.forRoot(StudentsDbService, {delay: 300, passThruUnknownUrl: true}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
