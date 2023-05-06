import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Utils} from "../../assets/Utils";
import {Book} from "../../models/task02/Book";

@Injectable({
    providedIn: 'root'
})
export class BookDbService implements InMemoryDbService {

    // создание базы данных
    createDb() {
        return {books: [...Utils.bookList]};
    }


    // переопределение метода генерации id
    // genId(books: {
    //     author: string,
    //     name: string,
    //     pubYear: number,
    //     price: number,
    //     image: string
    // }[]): number {
    //     return books.length > 0
    //         ? Math.max(...books.map(b => b.id ?? 0)) + 1
    //         : 1;
    // }
    // переопределение метода генерации id
    genId(books: Book[]): number {
        console.log(books)
        return books.length > 0
            ? Math.max(...books.map(b => b.id ?? 0)) + 1
            : 1;
    }
}
