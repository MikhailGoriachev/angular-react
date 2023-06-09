import { Component, OnInit, ViewEncapsulation } from '@angular/core';
  // https://caniuse.com/#search=Shadow%20DOM
  // https://angular.io/api/core/ViewEncapsulation
@Component({
  selector: 'app-container',
  template: `
            <h4>App-container</h4><hr>
            <app-card></app-card>
            `,
  styles: [
      // закомментировать/раскомментировать стили, свойство encapsulation
      // при  encapsulation: ViewEncapsulation.None локальные
      // стили приоритетнее
      'h4{ color: blue; font-size: 44px; }',
      'hr{ border: 2px solid red; }'
  ],
  // encapsulation: ViewEncapsulation.Emulated // Значение по умолчанию
  // encapsulation: ViewEncapsulation.None  // распространение стилей на все компоненты
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
