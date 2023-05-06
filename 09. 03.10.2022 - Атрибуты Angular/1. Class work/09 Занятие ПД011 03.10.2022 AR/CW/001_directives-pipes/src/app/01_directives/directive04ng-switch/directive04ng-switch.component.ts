import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive04ng-switch',
  templateUrl: './directive04ng-switch.component.html'
})
export class Directive04ngSwitchComponent implements OnInit {

  counter = 0;
  
  plus(){
    if(this.counter < 4){
      this.counter++;
    } else{
      this.counter = 0;
    }
  }
  
  constructor() { } 
  ngOnInit(): void {
  }

}
