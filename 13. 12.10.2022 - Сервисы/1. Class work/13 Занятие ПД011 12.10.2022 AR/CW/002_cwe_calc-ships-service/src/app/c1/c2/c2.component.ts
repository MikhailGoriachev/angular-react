import {Component, EventEmitter, OnInit, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  inputs: ['a', 'b']
})
export class C2Component implements OnInit, OnChanges {
  // исходные данные для вычислений
  a: number = 0;
  b: number = 0;

  constructor() { }
  ngOnInit(): void {  }

  // событие, зажигаемое после вычисления по заданию
  @Output() resultReadyEvent: EventEmitter<number[]> = new EventEmitter();

  // вычисление по заданию, зажигание события по окончании вычислений
  ngOnChanges(): void {
    // вычисление
    let z1: number = (Math.sin(this.a) + Math.cos(2*this.b - this.a)) / (Math.cos(this.a) - Math.sin(2*this.b - this.a));
    let z2: number = (1 + Math.sin(2*this.b)) / Math.cos(2*this.b);

    // зажигаем событие
    this.resultReadyEvent.emit([z1, z2]);
  } // ngOnChanges
} // class C2Component
