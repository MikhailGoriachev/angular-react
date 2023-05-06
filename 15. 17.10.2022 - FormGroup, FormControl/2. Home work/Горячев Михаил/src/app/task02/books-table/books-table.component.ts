import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Book} from "../../../models/task02/Book";

@Component({
    selector: 'app-books-table',
    templateUrl: './books-table.component.html'
})
export class BooksTableComponent implements OnChanges {

    // книги
    @Input() books: Book[] = [];

    // отображаемая коллекция
    booksView: Book[] = [];

    // добавить
    @Output() onAddItem: EventEmitter<void> = new EventEmitter<void>();

    // изменить книгу
    @Output() onEditItem: EventEmitter<number> = new EventEmitter<number>();

    // удалить
    @Output() onRemoveItem: EventEmitter<number> = new EventEmitter<number>();

    // состояние сортировки
    stateSort = {
        isDesc: false,
        fieldName: ""
    };

    ngOnChanges() {
        this.booksView = this.books;
    }

    // сортировка
    sortBy(fieldName: string = "", comp: (a: Book, b: Book) => number) {

        // сортировка
        this.booksView?.sort(comp);

        if (this.stateSort.fieldName !== fieldName || this.stateSort.isDesc) {
            this.booksView?.reverse();
            this.stateSort = {fieldName: fieldName, isDesc: false};
            return;
        }

        this.stateSort = {fieldName: fieldName, isDesc: true};
    }

    // упорядочивание по id
    sortById(): void {
        this.sortBy("id", (a, b) => a.id! - b.id!);
    }

    // упорядочивание по автору
    sortByAuthor(): void {
        this.sortBy("author", (a, b) => a.author!.localeCompare(b.author!));
    }

    // упорядочивание по названию
    sortByName(): void {
        this.sortBy("name", (a, b) => a.name!.localeCompare(b.name!));
    }
}
