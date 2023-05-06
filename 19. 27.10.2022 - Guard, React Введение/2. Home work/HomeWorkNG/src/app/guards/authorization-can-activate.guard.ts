import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthorizationService} from "../services/authorization.service";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationCanActivateGuard implements CanActivate {
    // конструктор
    constructor(private _authService: AuthorizationService) {
    }

    // получение резрешения загрузки
    canActivate = () => this._authService.isLoggedIn().then(d => d as boolean);
}
