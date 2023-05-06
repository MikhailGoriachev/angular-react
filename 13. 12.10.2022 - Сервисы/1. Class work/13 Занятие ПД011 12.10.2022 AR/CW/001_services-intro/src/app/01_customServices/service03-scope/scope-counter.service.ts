import { Injectable } from '@angular/core';

// еще один простой сервис
@Injectable()
export class ScopeCounterService {

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
