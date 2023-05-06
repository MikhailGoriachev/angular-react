import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../models/task02/Book";
import {BookDataService} from "../services/book-data.service";
import {Utils} from "../../assets/Utils";
import {SelectType} from "../../models/task02/SelectType";
import {Subscription} from "rxjs";


@Component({
    selector: 'app-task02',
    templateUrl: './task02.component.html'
})
// export class Task02Component implements OnInit {
export class Task02Component implements OnInit, OnDestroy {

    // исходные данные
    source: Book[] = [];

    // книги
    books: Book[] = [];

    // перечисление выборок
    SelectType = SelectType;

    // тип выборки
    currentSelectType: SelectType = SelectType.authorAndPriceRange;

    // подписка на событие обновления данных
    onChangesSubscribe: Subscription | undefined;

    // получить список авторов
    get authorList(): string[] {
        return [...new Set(this.source.map(b => b.author!))]
            .sort((a, b) => a.localeCompare(b));
    }

    // получить список названий
    get nameList(): string[] {
        return [...new Set(this.source.map(b => b.name!))]
            .sort((a, b) => a.localeCompare(b));
    }

    // список годов
    get yearList() : number[] {
        return [...new Set(this.source.map(b => b.pubYear!))]
            .sort((a, b) => b - a);
    }


    // конструктор
    constructor(private _data: BookDataService) {
    }


    // обработка события инициализации компонента
    ngOnInit(): void {
        this.updateItems();

        // подписка на событие изменения
        this.onChangesSubscribe = this._data.onChanges.subscribe(_ => this.updateItems())
    }

    // деструктор компонента
    ngOnDestroy(): void {
        this.onChangesSubscribe?.unsubscribe();
    }

    // обновление списка
    updateItems(): void {
        this._data.getItems().subscribe(b => this.source = this.books = b);
    }

    // добавить книгу
    addItem(): void {
        let b = Object.assign(new Book(), Utils.getBook());
        b.id = undefined;
        this._data.addItem(b);
    }

    // изменить книгу
    editItem(id: number): void {
        let book = this.source?.find(v => v.id === id);

        if (book === undefined)
            return;

        // изменения
        book.price = book.price! + 1000;
        book.pubYear!++;

        this._data.editItem(id, book);
    }

    // добавить книгу
    removeItem(id: number): void {
        this._data.removeItem(id);
    }

    // вывод всех книг
    selectByDefault(): void {
        this.books = this.source;
    }

    // вывести книги с заданным автором. Выводить название и год издания книги
    selectByAuthorAndYear(author: string, year: number): void {
        this.books = this.books.filter(b => b.author === author && b.pubYear === year);
    }

    // вывести книги, в названии которых содержится заданная подстрока и цена не превышает заданного значения
    selectByNameAndLessMaxPrice(name: string, maxPrice: number): void {
        this.books = this.books.filter(b => b.name!.includes(name) && b.price! < maxPrice);
    }

    // вывести название, автора книг, цена на которые попадает в заданный диапазон значений, выбранные книги
    // упорядочить по автору
    selectByAuthorAndPriceRange(author: string, minPrice: number, maxPrice: number): void {
        this.books = this.books.filter(b => b.author === author && b.price! >= minPrice && b.price! <= maxPrice);
    }

    // самые недорогие книги
    selectByPriceMin(): void {
        let minPrice = Math.min(...this.source.map(s => s.price!));

        this.books = this.source.filter(b => b.price === minPrice);
    }

    // самые старые книги
    selectByPriceMax(): void {
        let maxPrice = Math.max(...this.source.map(s => s.price!));

        this.books = this.source.filter(b => b.price === maxPrice);
    }
}
