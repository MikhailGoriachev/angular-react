import { Component, OnInit } from '@angular/core';

@Component({
  // имяПриложения-имяКомпонента
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  // свойство класса
  text = "";

  // реализация интерфейса OnInit - обработчик события создания компонента
  ngOnInit(): void {
    this.text = "Это first";
  }

}
