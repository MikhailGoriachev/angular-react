import {EventEmitter, Injectable} from '@angular/core';

import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../models/task01/Student";

@Injectable({
    providedIn: 'root'
})
export class StudentsDataService {

    // событие обновления данных
    onChanges: EventEmitter<void> = new EventEmitter();


    // конструктор
    constructor(private _http: HttpClient) {
    }


    // получить все записи
    getItems(): Observable<Student[]> {
        return this._http.get("api/students") as Observable<Student[]>;
    }

    // получить запись
    getItem(id: number): Observable<any> {
        return this._http.get(`api/students/${id}`);
    }

    // добавить запись
    addItem(student: Student): void {
        console.log(student)
        this._http.post("api/students", student).subscribe(d => this.onChanges.emit());
    }

    // изменить запись
    editItem(id: number, student: Student): void {
        console.log(id);
        console.log(student);

        this._http.put(`api/students/${id}`, student).subscribe(_ => this.onChanges.emit());
    }

    // удалить запись
    removeItem(id: number): void {
        this._http.delete(`api/students/${id}`).subscribe(_ => this.onChanges.emit());
    }
}
