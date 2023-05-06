import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor() { }
  private isAuth = false;

  loginService(){
    this.isAuth = true;
  }

  logoutService(){
    this.isAuth = false;
  }

  isLoggedIn(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 200);
    })
  }
}
