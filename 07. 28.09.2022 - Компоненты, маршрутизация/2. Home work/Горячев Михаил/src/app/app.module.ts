import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {Task01Component} from './task01/task01.component';
import {Task02Component} from './task02/task02.component';
import {Task03Component} from './task03/task03.component';
import {RouterLinkWithHref, RouterModule, Routes} from "@angular/router";

// маршруты
let routes: Routes = [
    {path: "", component: MainComponent},
    {path: "task01", component: Task01Component},
    {path: "task02", component: Task02Component},
    {path: "task03", component: Task03Component},
]

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        Task01Component,
        Task02Component,
        Task03Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterLinkWithHref,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
