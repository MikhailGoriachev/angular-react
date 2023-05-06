import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-form01',
  templateUrl: './react-form01.component.html'
})
export class ReactForm01Component implements OnInit {

  constructor() { }

  //---------------------
  // собcтвенная реализация двухсторонней привязки
  // переменная для ввода
  userText: string = 'Начальный текст';

  // обработчик события input
  inputHandle(value: string){
    this.userText = value;
  }
  //---------------------

  // еще одно свойство для двухсторонней привязки
  amount: number = 42;

  ngOnInit(): void {
  }

}
