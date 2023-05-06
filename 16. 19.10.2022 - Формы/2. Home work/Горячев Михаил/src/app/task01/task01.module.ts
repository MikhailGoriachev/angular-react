import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {Task01Component} from './task01.component';
import {Expression15Component} from './expression15/expression15.component';
import {Expression16Component} from './expression16/expression16.component';
import {Expression17Component} from './expression17/expression17.component';


@NgModule({
    declarations: [
        Task01Component,
        Expression15Component,
        Expression16Component,
        Expression17Component
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class Task01Module {
}
