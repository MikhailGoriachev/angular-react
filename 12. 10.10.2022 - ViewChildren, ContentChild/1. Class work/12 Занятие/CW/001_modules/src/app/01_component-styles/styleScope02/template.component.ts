import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  template: `
        <h2>Пример Шаблона</h2>
        <p>Первый параграф</p>
        <p>Второй параграф</p>
  `,
  // styleUrls: ['./main.css', './sub-styles.component.css'],
  styles: [`
    h2{
        background: pink;
        border: 2px solid rgb(200, 0, 0);
    }
    p{
      border-left: 4px solid green;
      padding: 10px;
    }
  `]
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
