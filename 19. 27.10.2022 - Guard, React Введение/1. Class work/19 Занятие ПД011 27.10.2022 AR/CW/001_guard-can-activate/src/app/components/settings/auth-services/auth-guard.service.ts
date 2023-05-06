import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {CanActivateChild, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

// Сервис-гард для доступа к маршруту settings
// обращается к сервису AuthService
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
// export class AuthGuardService implements CanActivateChild {
  constructor(private authService: AuthService) {
  }

  // методы canActivate и canActivateChild возвращают
  // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  // (некоторые поправки возвращаемого типа зависят от версии Angular)
  // Возвращаемое значение определяет будет ли активирован маршрут
  canActivate() {
  // canActivateChild() {
    return this.authService
      .isLoggedIn()
      .then((isAuth) => {
        // оригинальный код примера
        // return isAuth ? true : false

        // то, что предложил PhpStorm
        return !!isAuth;
      });
  }

}
