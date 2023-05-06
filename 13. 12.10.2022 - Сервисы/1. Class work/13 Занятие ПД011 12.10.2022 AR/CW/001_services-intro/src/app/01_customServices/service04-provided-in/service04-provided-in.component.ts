import { Component, OnInit } from '@angular/core';
import { SimpleCounterService } from './simple-counter.service';

@Component({
  selector: 'app-service04-provided-in',
  templateUrl: './service04-provided-in.component.html',
  styleUrls: ['./service04-provided-in.component.css']
})
export class Service04ProvidedInComponent implements OnInit {

  counter: number = 0;

  constructor(private counterService: SimpleCounterService) { 
    console.log(this.counterService)
  }

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
