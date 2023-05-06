import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe03',
  templateUrl: './pipe03.component.html'
})
export class Pipe03Component implements OnInit {

  constructor() { }
  float: number = 0.55;

  obj = {
    a: 1,
    b: 'текст для вывода',
    c: {
      f: 'hello',
      g: 55
    }
  }
  ngOnInit(): void {
  }

}
