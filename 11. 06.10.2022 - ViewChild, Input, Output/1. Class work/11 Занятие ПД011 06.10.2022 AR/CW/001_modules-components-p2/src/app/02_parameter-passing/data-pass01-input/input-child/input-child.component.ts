import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css'],
  // Первый способ передачи параметров в компонент
  inputs: ['name']
})
export class InputChildComponent implements OnInit {

  constructor() { }

  name: string = 'default Counter name';

  // Второй способ передачи параметров в компонент - декоратор @Input
  @Input() counterValue = 0;

  // step - внешнее имя для свойства stepCounter
  @Input('step') stepCounter = 3;
  increment() {
    this.counterValue = this.counterValue + this.stepCounter;
  }

  ngOnInit(): void {
  }

}
