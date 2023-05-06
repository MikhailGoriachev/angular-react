// Задача 1. Требуется получать коллекцию пользователей используя ресурс по запросу
// https://jsonplaceholder.typicode.com/users/. Сохранять в коллекции поля: id, name, username, email, phone, website.
// Коллекцию выводить в компонент представления, коллекцию получайте сервисом.
//
// •	По кнопке вывести все посты пользователя (запрос вида https://jsonplaceholder.typicode.com/users/2/posts где 2 -
//      идентификатор пользователя), также выводить количество постов, минимальную, среднюю и максимальную длину текста
//      (поле body) в символах
// •	По кнопке вывести фото из альбома пользователя (запрос вида https://jsonplaceholder.typicode.com/albums/1/photos
//      где 1 – идентификатор пользователя, выводить поле thumbnailUrl), количество фотографий в альбоме
// •	Вывести список дел пользователя (запрос вида https://jsonplaceholder.typicode.com/users/3/todos где 3 –
//      идентификатор пользователя), количество дел, количество завершенных и не завершенных дел

import {Component, OnInit} from '@angular/core';
import {User} from "../../models/task01/User";
import {Post} from "../../models/task01/Post";
import {Photo} from "../../models/task01/Photo";
import {Todo} from "../../models/task01/Todo";
import {TodoDataService} from "../services/todo-data.service";
import {InfoState} from "../../models/task01/InfoState";

@Component({
    selector: 'app-task01',
    templateUrl: './task01.component.html'
})
export class Task01Component implements OnInit {

    // пользователи
    users: User[] = [];

    // посты пользователя
    posts: Post[] = [];

    // фото пользователя
    photos: Photo[] = [];

    // список дел пользователя
    todos: Todo[] = [];

    // перечисление дополнительной информации
    InfoState = InfoState;

    // текущий тип выводимой дополнительной информации
    currentInfoState: InfoState = 0;

    // конструктор
    constructor(private _data: TodoDataService) {
    }


    // обработчик события инициализация компонента
    ngOnInit(): void {
        this._data.getUsers().subscribe(d => this.users = d);
    }

    // получить данные о постах
    getPosts(idUser: number): void {
        this._data.getPosts(idUser).subscribe(d => this.posts = d);
        this.currentInfoState = InfoState.posts;
    }

    // получить данные о фото
    getPhotos(idUser: number): void {
        this._data.getPhotos(idUser).subscribe(d => this.photos = d);
        this.currentInfoState = InfoState.photo;
    }

    // получить список дел
    getTodos(idUser: number): void {
        this._data.getTodos(idUser).subscribe(d => this.todos = d);
        this.currentInfoState = InfoState.todoList;
    }
}
