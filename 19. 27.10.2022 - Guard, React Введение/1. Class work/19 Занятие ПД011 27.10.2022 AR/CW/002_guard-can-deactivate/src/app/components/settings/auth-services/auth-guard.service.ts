import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivateChild, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
// export class AuthGuardService implements CanActivateChild {
  constructor(private authService: AuthService) { }
  // методы canActivate и canActivateChild возращают
  // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  // (некоторые поправки возвращаемого типа зависят от версии Ангуляр)
  // Возвращаемое значение определяет будет ли активирован маршрут
  
  canActivate() {
  // canActivateChild() {
      return this.authService.isLoggedIn()
                              .then((isAuth)=>{
                                return isAuth ? true : false
                              });
  }
  
}
