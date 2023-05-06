import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/task01/User";

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html'
})
export class UsersTableComponent {

    // пользователи
    @Input() users: User[] = [];

    // выбор постов пользователя
    @Output() onSelectPostsUser: EventEmitter<number> = new EventEmitter();

    // выбор фото пользователя
    @Output() onSelectPhotosUser: EventEmitter<number> = new EventEmitter();

    // выбор списка дел пользователя
    @Output() onSelectTodosUser: EventEmitter<number> = new EventEmitter();


    // конструктор
    constructor() {
    }

}
