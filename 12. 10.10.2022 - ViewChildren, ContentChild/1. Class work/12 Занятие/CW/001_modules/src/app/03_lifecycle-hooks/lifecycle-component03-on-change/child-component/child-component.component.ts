import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html'
})
export class ChildComponentComponent implements OnInit, OnChanges {

  constructor() {
    this.fromInput = 'Первое значение';
    console.log(`1) constructor вызван. Значение свойтсва fromInput: ${this.fromInput}`)
  }
  @Input() fromInput = 'Текст не отобразиться';
  @Input() btnCounterClicked: number = 0;
  @Input('booleanValue') valBool = false;

  ngOnChanges(changes: SimpleChanges): void{
    console.log('2) ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(`3) ngOnInit() метод. Значение fromInput: ${this.fromInput}`)
  }
}
