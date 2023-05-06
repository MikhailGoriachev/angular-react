import { Component, OnInit } from '@angular/core';
import { ScopeCounterService } from '../scope-counter.service';

@Component({
  selector: 'app-child03',
  templateUrl: './child03.component.html',
  styleUrls: ['./child03.component.css']
})
export class Child03Component implements OnInit {

  counter: number = 0;

  // в данном случае это глобальный сервис (сществующий в едиственном экземпляре),
  // т.к. providers: [ScopeCounterService]  отстутствует в @Component()
  // и ScopeCounterService зарегистрирован в AppModule
  constructor(private counterService: ScopeCounterService) { }

  plus(){
    this.counterService.increment();
    this.counter = this.counterService.getValue()
  }
  minus(){
    this.counterService.decrement();
    this.counter = this.counterService.getValue()
  }
  ngOnInit() {
  }

}
