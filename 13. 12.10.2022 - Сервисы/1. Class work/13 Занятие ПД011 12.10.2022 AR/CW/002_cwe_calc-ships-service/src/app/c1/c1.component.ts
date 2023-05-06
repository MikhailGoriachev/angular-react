import {Component, OnInit, ViewChild} from '@angular/core';
import {C2Component} from "./c2/c2.component";
import {C3Component} from "./c3/c3.component";

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html'
})
export class C1Component implements OnInit {

  public a: number = 0;
  public b: number = 0;

  constructor() {   }
  ngOnInit(): void { }

  // примитивный генератор случайных чисел
  private getRand(): number {
    return -100 + 200 * Math.random();
  }

  // получить ссылку на дочерний компонент C3
  @ViewChild('appC3') appC3: C3Component = null!;

  // обработчик клика по кнопке - генерация случайных чисел
  // и запуск вычислений
  calc() {
    // сформировать данные для вычислений
    this.a = this.getRand();
    this.b = this.getRand();
  }
} // class C1Component
