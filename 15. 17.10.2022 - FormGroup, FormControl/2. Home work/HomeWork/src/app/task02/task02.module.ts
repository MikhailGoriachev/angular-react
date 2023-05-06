import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {BookDbService} from "../services/book-db.service";
import {ReactiveFormsModule} from "@angular/forms";

import {Task02Component} from "./task02.component";
import {BookFormComponent} from './book-form/book-form.component';
import {BooksTableComponent} from "./books-table/books-table.component";

@NgModule({
    declarations: [
        Task02Component,
        BooksTableComponent,
        BookFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class Task02Module {
}
