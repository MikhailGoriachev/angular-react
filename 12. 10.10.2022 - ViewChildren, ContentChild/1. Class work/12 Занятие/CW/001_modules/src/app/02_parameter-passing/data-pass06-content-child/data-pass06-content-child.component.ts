import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-pass06-content-child',
  templateUrl: './data-pass06-content-child.component.html'
})
export class DataPass06ContentChildComponent implements OnInit {

  // данные для вывода в компонент
  contentP: string = 'Привет, Angular';

  constructor() { }
  ngOnInit(): void {
  }

}
