import {Injectable} from '@angular/core';
import {CanLoad} from '@angular/router';
import {AuthorizationService} from "../services/authorization.service";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationCanLoadGuard implements CanLoad {

    // конструктор
    constructor(private _authService: AuthorizationService) {
    }

    // получение резрешения загрузки
    canLoad() {
        return this._authService.isLoggedIn().then(d => <boolean>d);
    }
}
