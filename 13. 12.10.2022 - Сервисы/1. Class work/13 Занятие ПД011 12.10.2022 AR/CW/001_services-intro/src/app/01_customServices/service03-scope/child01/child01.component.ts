import { Component, OnInit } from '@angular/core';
import { ScopeCounterService } from '../scope-counter.service';

@Component({
  selector: 'app-child01',
  templateUrl: './child01.component.html',
  styleUrls: ['./child01.component.css'],

  // Настройка локального сервиса.
  // У каждого компонента будет свой независимый счетчик,
  // без этой настройки будет один счетчик на всех
  // т.к. ScopeCounterService зарегистрирован в AppModule
  providers: [ScopeCounterService]
})
export class Child01Component implements OnInit {

  counter: number = 0;
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
