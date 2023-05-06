import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/task01/User";
import {Observable} from "rxjs";
import {Post} from "../../models/task01/Post";
import {Photo} from "../../models/task01/Photo";
import {Todo} from "../../models/task01/Todo";

@Injectable({
    providedIn: 'root'
})
export class TodoDataService {

    // url ссылка на ресурс
    url: string = "https://jsonplaceholder.typicode.com";


    // конструктор
    constructor(private _http: HttpClient) {
    }


    // получить данные о пользователях
    getUsers(): Observable<User[]> {
        console.log(this._http)
        return this._http.get(`${this.url}/users`) as Observable<User[]>;
    }

    // получить данные о постах
    getPosts(idUser: number): Observable<Post[]> {
        return this._http.get(`${this.url}/users/${idUser}/posts`) as Observable<Post[]>;
    }

    // получить данные о фото
    getPhotos(idUser: number): Observable<Photo[]> {
        return this._http.get(`${this.url}/albums/${idUser}/photos`) as Observable<Photo[]>;
    }

    // получить список дел
        getTodos(idUser: number): Observable<Todo[]> {
        return this._http.get(`${this.url}/users/${idUser}/todos`) as Observable<Todo[]>;
    }
}
