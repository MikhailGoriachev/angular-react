import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding05keyboards',
  templateUrl: './binding05keyboards.component.html'
})
export class Binding05KeyboardsComponent implements OnInit {

  message = '';

  constructor() { }
  ngOnInit(): void { }

  show(text){
    this.message = text;
  }


}
