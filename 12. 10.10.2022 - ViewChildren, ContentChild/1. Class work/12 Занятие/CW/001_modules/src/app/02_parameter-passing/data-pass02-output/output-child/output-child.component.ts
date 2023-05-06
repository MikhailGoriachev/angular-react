import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {

  constructor() { }
  public currentValue: string = 'первоначальный текст';

  // событие, которое можно видеть во внешних компонентах
  @Output()
  myOwnEvent: EventEmitter<string> = new EventEmitter();

  start(inputText: any) {
      this.currentValue = inputText;
      // эмитим/порождаем событие myOwnEvent передавая значение currentValue к DataPass02OutputComponent
      this.myOwnEvent.emit(this.currentValue);
  }

  // событие, которое можно видеть во внешних компонентах
  @Output() counterEvent: EventEmitter<number> = new EventEmitter();
  outputCounter:number = 0;
  incCounter(){
    this.outputCounter++;

    // эмитим/порождаем событие counterEvent передавая значение outputCounter к DataPass02OutputComponent
    this.counterEvent.emit(this.outputCounter)
  }


  ngOnInit(): void { }

}
