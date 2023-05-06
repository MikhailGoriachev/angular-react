import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive03ng-if',
  templateUrl: './directive03ng-if.component.html',
  styleUrls: ['./directive03ng-if.component.css']
})
export class Directive03ngIfComponent implements OnInit {
  
  // свойство для управления разметкой
  flagToggle = true;

  // свойство для управления разметкой
  elseLoading = true;

  changeMethod(){
    this.elseLoading = false;

    setTimeout(()=>{ this.elseLoading = true; }, 5_000)
  }

  constructor() { }
  ngOnInit(): void { }


}
