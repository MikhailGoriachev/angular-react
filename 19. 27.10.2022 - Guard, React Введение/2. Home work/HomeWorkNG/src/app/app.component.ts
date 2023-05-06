import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthorizationService} from "./services/authorization.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'HomeWork';

    // подписки на события
    handlers: Subscription[] = [];

    // состояние авторизации
    isAuth: boolean = false;


    // конструктор
    constructor(private _auth: AuthorizationService) {
    }


    // обработка события инициализации компонента
    ngOnInit(): void {
        // подписка на событие изменения состояния авторизации
        this.handlers.push(this._auth.onAuthChange.subscribe(v => this.changeIsAuth(v)));
    }

    // обработка события деструктурирования компонента
    ngOnDestroy(): void {
        this.handlers.forEach(h => h.unsubscribe());
    }


    // изменение значения состояния авторизации
    changeIsAuth(value: boolean): void {
        this.isAuth = value;
    }

    // войти в системы
    login = () => this._auth.login();

    // выйти из системы
    logout = () => this._auth.logout();
}
