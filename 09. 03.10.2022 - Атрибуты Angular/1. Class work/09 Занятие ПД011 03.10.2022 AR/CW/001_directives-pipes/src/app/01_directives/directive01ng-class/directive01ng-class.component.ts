import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive01ng-class',
  templateUrl: './directive01ng-class.component.html',
  styleUrls: ['./directive01ng-class.component.css']
})
export class Directive01NgClassComponent implements OnInit {

  // свойство для управления CSS-классами
  flag: boolean;

  constructor() {
    this.flag = true;
  }
  ngOnInit(): void {
  }

}
