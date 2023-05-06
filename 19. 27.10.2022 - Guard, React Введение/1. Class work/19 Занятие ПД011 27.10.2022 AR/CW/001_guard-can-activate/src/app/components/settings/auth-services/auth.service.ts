import { Injectable } from '@angular/core';

// сервис-имитатор входа в приложение
// в реальном приложении отправит запрос на сервер БД для проверки
// введенного логина и пароля (или других параметров аутентификации)
@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor() { }

  // true  - вход выполнен
  // false - вход НЕ выполнен
  private isAuth = false;

  // имитация входа
  loginService(){
    this.isAuth = true;
  }

  // имитация выхода
  logoutService(){
    this.isAuth = false;
  }

  // имитация проверки вход выполнен или не выполнен
  isLoggedIn(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 200);
    })
  }
}
