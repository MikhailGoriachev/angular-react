import { Injectable } from '@angular/core';

// простейший сервис :) - декоратор это самое важное в этом примере :)
@Injectable()
export class SimpleService {

  // свойства сервиса...
  counterService: number = 0;

  // методы сервиса...

  increment(){
    this.counterService++;
  }

  decrement(){
    this.counterService--;
  }
}
