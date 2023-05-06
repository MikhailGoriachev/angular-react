import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  // свойство для управления классом bg
  bgToggle = false;

  // метод, вызываемый из родительского компонента
  childMethod(){  this.bgToggle = !this.bgToggle; }

  constructor() { }
  ngOnInit(): void { }

}
