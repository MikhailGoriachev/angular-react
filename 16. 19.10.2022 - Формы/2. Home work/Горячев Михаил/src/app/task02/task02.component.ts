import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../models/task02/Book";
import {BookDataService} from "../services/book-data.service";
import {SelectType} from "../../models/task02/SelectType";
import {Subscription} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Utils } from 'src/assets/Utils';
import {rangeValidator} from "../../validators/rangeValidator";


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
    currentSelectType: SelectType = SelectType.priceRange;

    // подписка на событие обновления данных
    onChangesSubscribe: Subscription | undefined;

    // выбранная книга
    currentBook: Book = new Book();

    // режим редактирования/создания
    isCreateBook: boolean = true;

    controlsByNameAndLessMaxPrice = {
        name: new FormControl(),
        maxPrice: new FormControl()
    }

    // форма для названия и максимальной цены
    formByNameAndLessMaxPrice = this._fb.group({
        name: this.controlsByNameAndLessMaxPrice.name = this._fb.control(this.nameList[0], Validators.required),
        maxPrice: this.controlsByNameAndLessMaxPrice.maxPrice = this._fb.control(this.yearList[0], Validators.required)
    });

    controlsByPriceRange = {
        minPrice: new FormControl(),
        maxPrice: new FormControl()
    }

    // форма для названия и максимальной цены
    formByPriceRange = this._fb.group({
        minPrice: this.controlsByPriceRange.minPrice = this._fb.control(0, Validators.required),
        maxPrice: this.controlsByPriceRange.maxPrice = this._fb.control(0, Validators.required)
    }, {validators: rangeValidator(this.controlsByPriceRange.minPrice, this.controlsByPriceRange.maxPrice)});

    // обработчик формы для книги
    formBookHandler: (b: Book) => void = (b) => {
    };

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
    get yearList(): number[] {
        return [...new Set(this.source.map(b => b.pubYear!))]
            .sort((a, b) => b - a);
    }

    // утилиты
    Utils = Utils;


    // конструктор
    constructor(private _data: BookDataService, private _fb: FormBuilder) {
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
        this.currentBook = new Book();
        this.isCreateBook = true;
        this.formBookHandler = (b) => {
            b.id = undefined;
            this._data.addItem(b);
        }
    }

    // изменить книгу
    editItem(id: number): void {
        this.isCreateBook = false;
        let book = this.source?.find(v => v.id === id);

        if (book === undefined)
            return;

        this.currentBook = book;

        this.formBookHandler = (b) => {
            b.id = id;
            this._data.editItem(id, b);
        }
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
    selectByNameAndLessMaxPrice(form: FormGroup): void {
        console.dir(form.value);
        this.books = this.books.filter(b => b.name!.includes(form.value.name) && b.price! < +form.value.maxPrice);
    }

    // вывести название, автора книг, цена на которые попадает в заданный диапазон значений, выбранные книги
    // упорядочить по автору
    selectByAuthorAndPriceRange(form: FormGroup): void {
        console.dir(form.value);
        this.books = this.books.filter(b => b.price! >= +form.value.minPrice && b.price! <= +form.value.maxPrice);
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
