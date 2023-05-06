import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding08style',
  templateUrl: './binding08style.component.html',
  styleUrls: ['./binding08style.component.css']
})
export class Binding08StyleComponent implements OnInit {

  constructor() { }

  // управляющее свойство стилей
  toggle = true;

  ngOnInit(): void {
  }

}
