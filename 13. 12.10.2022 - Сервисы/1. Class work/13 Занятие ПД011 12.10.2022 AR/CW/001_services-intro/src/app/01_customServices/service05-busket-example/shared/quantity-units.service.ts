import { Injectable } from '@angular/core';

@Injectable({
  // глобальный сервис, но мы будем использовать его как локальный
  // за счет регистрации в ProductItemComponent
  providedIn: 'root'
})
export class QuantityUnitsService {

  constructor() { }
  counter = 1;

  plus(){
    return ++this.counter
  }

  minus(){
    if(this.counter - 1 < 0){
      return this.counter;
    }
    return --this.counter
  }

}
