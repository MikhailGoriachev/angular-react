import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';

import {Task01Module} from "./task01/task01.module";
import {Task02Module} from "./task02/task02.module";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {BookDbService} from "./services/book-db.service";


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
        Task02Module,
        InMemoryWebApiModule.forRoot(BookDbService, {delay: 300, passThruUnknownUrl: true}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
