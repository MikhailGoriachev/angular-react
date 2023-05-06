import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  content: string = `
    <p>Динамический элемент. Параграф выводится через свойство</p>
  `
  ngOnInit(): void {
  }

}
