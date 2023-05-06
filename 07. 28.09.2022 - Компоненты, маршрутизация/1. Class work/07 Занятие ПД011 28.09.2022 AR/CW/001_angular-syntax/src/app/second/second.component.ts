import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  // открытый метод класса
  sayPi(): string { return `${Math.PI}`}

  // открытое свойство класса
  pi = "";

  ngOnInit(): void {
    this.pi = this.sayPi();
  }

}
