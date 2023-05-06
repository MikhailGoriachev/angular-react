import { Component, OnInit } from '@angular/core';
import { SimpleService } from './simple.service';

@Component({
  selector: 'app-service01-simple',
  templateUrl: './service01-simple.component.html',
  styleUrls: ['./service01-simple.component.css']
})
export class Service01SimpleComponent implements OnInit {

  counterComponent: number = 0;
  // Подключение сервиса к компоненту
  // Сервис зарегистрирован в модуле AppModule
  constructor(public myservice: SimpleService) { }

  // этот обработчик вызывает метод сервиа
  plus(){
    this.myservice.increment();
    this.counterComponent = this.myservice.counterService;
  }


  minus(){
    this.myservice.decrement();
    this.counterComponent = this.myservice.counterService;
  }


  ngOnInit(): void {
  }

}
