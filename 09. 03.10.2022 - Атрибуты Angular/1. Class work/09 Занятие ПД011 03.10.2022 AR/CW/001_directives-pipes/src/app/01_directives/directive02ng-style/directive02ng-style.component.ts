import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive02ng-style',
  templateUrl: './directive02ng-style.component.html',
  styleUrls: ['./directive02ng-style.component.css']
})
export class Directive02ngStyleComponent implements OnInit {

  // свойство для управления стилями
  toggle = true;

  constructor() { }
  ngOnInit(): void { }

}
