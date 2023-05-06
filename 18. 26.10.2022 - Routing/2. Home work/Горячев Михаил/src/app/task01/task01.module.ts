import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {Task01Component} from './task01.component';
import {Task01RoutingModule} from "./task01-routing.module";
import {Book1Component} from "./components/book1/book1.component";
import {IntroductionComponent} from "./components/book1/introduction/introduction.component";
import {Chapter1Component} from "./components/book1/chapter1/chapter1.component";
import {Chapter2Component} from "./components/book1/chapter2/chapter2.component";
import {Chapter3Component} from "./components/book1/chapter3/chapter3.component";
import {Chapter4Component} from "./components/book1/chapter4/chapter4.component";


@NgModule({
    declarations: [
        Task01Component,
        Book1Component,
        IntroductionComponent,
        Chapter1Component,
        Chapter2Component,
        Chapter3Component,
        Chapter4Component,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        // маршрутизация
        Task01RoutingModule,
    ]
})
export class Task01Module {
}
