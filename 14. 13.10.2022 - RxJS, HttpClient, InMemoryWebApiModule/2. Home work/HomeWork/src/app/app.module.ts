import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {Task01Component, UsersTableComponent} from './task01';
import {HttpClientModule} from "@angular/common/http";
import {PostsTableComponent} from './task01/posts-table/posts-table.component';
import {PhotosTableComponent} from './task01/photos-table/photos-table.component';
import {TodosTableComponent} from './task01/todos-table/todos-table.component';
import {BooksTableComponent, Task02Component} from "./task02";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {BookDbService} from "./services/book-db.service";


@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        Task01Component,
        UsersTableComponent,
        PostsTableComponent,
        PhotosTableComponent,
        TodosTableComponent,
        Task02Component,
        BooksTableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(BookDbService, {delay: 300, passThruUnknownUrl: true}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
