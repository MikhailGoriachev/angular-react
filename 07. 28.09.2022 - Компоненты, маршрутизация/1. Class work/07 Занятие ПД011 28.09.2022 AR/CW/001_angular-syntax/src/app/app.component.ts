import { Component } from '@angular/core';

// декоратор  Component и делает класс TS компонентом Angular
@Component({
  // имя элемента разметки
  selector: 'app-root',
  templateUrl: './app.component.html',

  // совсем простую разметку модем задавать тут :)
  // template: "<p>Свойство класса с именем title: {{title}} {{ weight }}</p>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Введение в Angular';
  weight = 95.5;
}
