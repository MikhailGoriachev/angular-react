import {Component, OnInit, ViewChild} from '@angular/core';
import {C2Component} from "../c2/c2.component";

// Компонент принимает a, b для передачи их в C2
// обрабатывает событие, эмитируемое в C2 по вычислении z1, z2
@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  inputs: ['a', 'b']
})
export class C3Component implements OnInit {

  // свойства для получения из компонента C2
  a: number = 0;
  b: number = 0;

  // результаты вычислений, полученные от компонента c3
  z1: number | undefined;
  z2: number | undefined;

  // признак успешного вычисления
  success: boolean = true;

  constructor() { }

  ngOnInit(): void {  }

  // получить ссылку на дочерний компонент C2
  @ViewChild('appC2') appC2: C2Component = null!;

  // обработчик события "Результат готов", которое эмитируется в компоненте c2
  resultEventHandler($event: number[]) {
    [this.z1, this.z2] = [...$event];

    // сравнение л 10го знака в дробной части
    this.success = Math.abs(this.z1 - this.z2) < 1e-10;
  } // resultEventHandler
} // class C3Component
