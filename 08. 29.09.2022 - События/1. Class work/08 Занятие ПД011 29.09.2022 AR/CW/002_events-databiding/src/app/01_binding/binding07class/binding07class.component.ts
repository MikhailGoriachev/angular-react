import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding07class',
  templateUrl: './binding07class.component.html',
  styleUrls: ['./binding07class.component.css']
})
export class Binding07ClassComponent implements OnInit {

  constructor() { }
  stringClasses = 'bg border';

  // для управления классами
  flag = true;

  ngOnInit(): void {
  }

}
