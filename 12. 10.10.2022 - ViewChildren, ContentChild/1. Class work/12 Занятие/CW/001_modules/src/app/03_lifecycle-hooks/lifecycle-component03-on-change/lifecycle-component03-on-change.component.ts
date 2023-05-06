import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-component03-on-change',
  templateUrl: './lifecycle-component03-on-change.component.html'
})
export class LifecycleComponent03OnChangeComponent implements OnInit {

  constructor() { }
  textString: string = 'простой текст';
  counter: number = 10;
  bool: boolean = false;
  editValueInput(text: string){
    this.textString = text;
  }

  editValueCounter(){
    this.counter++;
  }
  editAll(){
    this.textString = 'метод editAll()';
    this.counter = this.counter + 5;
    this.bool = !this.bool;
  }

  ngOnInit(): void {}

}
