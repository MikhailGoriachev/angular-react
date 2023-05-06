import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding03events',
  templateUrl: './binding03events.component.html'
})
export class Binding03EventsComponent implements OnInit {

  counter: number = 1;

  // обработчики события клика по кнопкам "Плюс", "Минус"
  increment(){ this.counter++;  }
  decrement(){  this.counter--; }

  // обрабтчик с параметром
  consoleCounter(e){
    console.log(`счетчик: ${e}`);
  }

  // в д.с. ожмдается объект события
  // !!! смотрите HTML !!!
  consoleEventObj1(e){
    console.log(e);
    console.log(e.type);
  }
  consoleEventObjValue(e){
    console.log(e);
  }

  a = 'old ';
  b = 'text1';

  ngOnInit(){}
}
