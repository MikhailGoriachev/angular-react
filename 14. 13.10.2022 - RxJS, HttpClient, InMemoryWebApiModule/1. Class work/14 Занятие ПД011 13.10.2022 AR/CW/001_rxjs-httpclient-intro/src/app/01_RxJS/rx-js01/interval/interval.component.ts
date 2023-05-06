import {Component, OnDestroy} from '@angular/core';
import {interval} from 'rxjs';

// демо для RxJS
@Component({
     selector: 'app-interval',
     templateUrl: './interval.component.html'
})
export class IntervalComponent implements OnDestroy {
     oneSecond;
     threeSeconds;

     constructor() {
          // функция RxJS будет генерировать событие каждые 500 мс
          // но на это событие нчто не подписано...
          // это более цивилизованный вариант setInterval()
          interval(500);

          // создание объекта, формирующего событие каждые 1000 мс,
          // подписка на это событие
          this.oneSecond =
               interval(1000).subscribe(
                    (value) => {
                         console.log('ONE second ' + value);
                    })

          // создание объекта, формирующего событие каждые 1000 мс,
          // подписка на это событие - в методе goInterval()
          this.threeSeconds = interval(3000)
     }

     // обработчик клика на кнопку - подписывает на событие очередного наблюдателя
     goInterval() {
          this.threeSeconds.subscribe(
               (value) => {
                    console.log('THREE seconds ' + value);
               })
     }

     // при удалении компонента - отписаться от RxJS
     ngOnDestroy() {
          // раскомментировать для корректной работы
          // отписаться от события
          this.oneSecond.unsubscribe()
     }

}
