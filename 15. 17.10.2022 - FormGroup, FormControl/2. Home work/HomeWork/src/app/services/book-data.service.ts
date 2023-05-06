import {EventEmitter, Injectable} from '@angular/core';
import {Book} from "../../models/task02/Book";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookDataService {

    // событие обновления данных
    onChanges: EventEmitter<void> = new EventEmitter();


    // конструктор
    constructor(private _http: HttpClient) {
    }


    // получить все записи
    getItems(): Observable<Book[]> {
        return this._http.get("api/books") as Observable<Book[]>;
    }

    // добавить запись
    addItem(book: Book): void {
        this._http.post("api/books", book).subscribe(d => this.onChanges.emit());
    }

    // изменить запись
    editItem(id: number, book: Book): void {
        this._http.put(`api/books/${id}`, book).subscribe(_ => this.onChanges.emit());
    }

    // удалить запись
    removeItem(id: number): void {
        this._http.delete(`api/books/${id}`).subscribe(_ => this.onChanges.emit());
    }
}
