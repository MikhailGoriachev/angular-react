import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Book} from "../../../models/task02/Book";
import {BookDataService} from "../../services/book-data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

    // форма
    form: FormGroup = new FormGroup({
        author: new FormControl(this.sourceBook.author, [Validators.required]),
        name: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(60)]),
        pubYear: new FormControl(new Date().getFullYear(), [Validators.required]),
        price: new FormControl(0, [Validators.required, Validators.min(1)]),
    });


    // конструктор
    constructor(private _data: BookDataService) {
    }


    // событие обработки инициализации компонента
    ngOnInit(): void {

    }


    // событие изменения параметров
    ngOnChanges(changes:SimpleChanges) {
        if (changes['sourceBook'] !== undefined) {
            this.form.get('author')!.setValue(this.sourceBook.author);
            this.form.get('name')!.setValue(this.sourceBook.name);
            this.form.get('pubYear')!.setValue(this.sourceBook.pubYear);
            this.form.get('price')!.setValue(this.sourceBook.price);
        }
    }

    // обработчик формы
    onSubmit(form: FormGroup) {
        let book = Object.assign(new Book, form.value);
        book.image = this.isCreateMode ? "default-book.jpg" : this.sourceBook.image;
        this.onSubmitEvent.emit(book);
    }
}
