import {Injectable} from '@angular/core';
import {delay, map, of} from 'rxjs';

// Демонстрация функций delay, map, of из библиотеки RxJS
@Injectable({
     providedIn: 'root'
})
export class ServerDataService {

     constructor() {
     }

     getData() {

          // подготовить массив данных
          let data = [];
          for (let i = 0; i < 7; i++) {
               data.push('List item ' + (i + 1));
          }

          // возвращается объект, на который можно подписаться
          // в конвейере pipe() последовательно выполняются операции RxJS
          return of(data).pipe(
               delay(1000),
               map(text => {
                    console.log(`method "map()" work`);
                    console.dir(text);
                    return text.concat('new item for List');
               }),
               delay(1000)
          );
     }
}
