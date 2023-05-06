import { Injectable } from '@angular/core';
import { ForProvidedInPropertyModule } from './for-provided-in-property/for-provided-in-property.module';

@Injectable({
  // эта строка или имя класса привязки к модулю, компонента
  // т.е. нужен модуль ForProvidedInPropertyModule и его
  // требуется регистрировать в AppModule
  // providedIn: ForProvidedInPropertyModule

  // упрощенная регистрация глобального модуля - не требуется
  // регистрация в AppModule
  providedIn: 'root'
})
export class SimpleCounterService {

  counter: number = 0;

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }

  getValue(){
    return this.counter;
  }
}
