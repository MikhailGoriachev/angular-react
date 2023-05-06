import { Component, OnInit } from '@angular/core';
import { SimpleCounterService } from '../simple-counter.service';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.css'],

  // для получение локального сервиса (собственного экземпляра)
  // providers: [SimpleCounterService]
})
export class ChildCounterComponent implements OnInit {

  counter: number = 0;

  constructor(private counterService: SimpleCounterService) { }

  plus(){
    this.counterService.increment();
    this.counter = this.counterService.getValue()
  }
  minus(){
    this.counterService.decrement();
    this.counter = this.counterService.getValue()
  }
  ngOnInit(): void {
  }

}
