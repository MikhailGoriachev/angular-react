import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe01',
  templateUrl: './pipe01.component.html'
})
export class Pipe01Component implements OnInit {
  
  textOne = 'Пример текста';
  textTwo = 'ВЕРХНИЙ РЕГИСТР';

  varNumber = Math.PI;

  
  constructor() { }

  ngOnInit(): void {
  }

}
