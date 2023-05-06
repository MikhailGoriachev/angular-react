import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    // показатель входа
    private _isAuth: boolean = false;

    // событие изменения состояния авторизации
    onAuthChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    // вход в систему
    login(): void {
        this._isAuth = true;
        this.onAuthChange.emit(this._isAuth);
    }

    // выход из системы
    logout(): void {
        this._isAuth = false;
        this.onAuthChange.emit(this._isAuth);
    }

    // проверка входа
    isLoggedIn() {
        return new Promise(resolve => resolve(this._isAuth));
    }
}
