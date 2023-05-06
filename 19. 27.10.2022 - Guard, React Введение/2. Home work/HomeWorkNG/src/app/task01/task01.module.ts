import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {Task01Component} from './task01.component';
import {StudentsTableComponent} from './students-table/students-table.component';
import {StudentFormComponent} from './student-form/student-form.component';
import {Task01RoutingModule} from "./task01-routing.module";


@NgModule({
    declarations: [
        Task01Component,
        StudentsTableComponent,
        StudentFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        Task01RoutingModule
    ]
})
export class Task01Module {
}
