import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Book} from "../../../models/task02/Book";
import {BookDataService} from "../../services/book-data.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Utils } from 'src/assets/Utils';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit, OnChanges {

    // тип формы
    @Input() isCreateMode: boolean = true;

    // событие submit
    @Output() onSubmitEvent: EventEmitter<Book> = new EventEmitter<Book>();

    // авторы
    @Input() authorList: string[] = [];

    // книга
    @Input() sourceBook: Book = new Book();

    // контролы для формы
    formControls = {
        author: new FormControl(),
        name: new FormControl(),
        pubYear: new FormControl(),
        price: new FormControl(),
    }

    // форма
    form: FormGroup = this._fb.group({
        author: this.formControls.author = this._fb.control(this.sourceBook.author, [Validators.required]),
        name: this.formControls.name = this._fb.control("", [Validators.required, Validators.minLength(1), Validators.maxLength(120)]),
        pubYear: this.formControls.pubYear = this._fb.control(new Date().getFullYear(), [Validators.required]),
        price: this.formControls.price = this._fb.control(0, [Validators.required, Validators.min(1)]),
    });

    // утилиты
    Utils = Utils;


    // конструктор
    constructor(private _data: BookDataService, private _fb: FormBuilder) {
    }


    // событие обработки инициализации компонента
    ngOnInit(): void {

    }


    // событие изменения параметров
    ngOnChanges(changes: SimpleChanges) {
        if (changes['sourceBook'] !== undefined) {
            this.form.patchValue(this.sourceBook);
        }
    }

    // обработчик формы
    onSubmit(form: FormGroup) {
        let book = Object.assign(new Book, form.value);
        book.image = this.isCreateMode ? "default-book.jpg" : this.sourceBook.image;
        this.onSubmitEvent.emit(book);
    }
}
