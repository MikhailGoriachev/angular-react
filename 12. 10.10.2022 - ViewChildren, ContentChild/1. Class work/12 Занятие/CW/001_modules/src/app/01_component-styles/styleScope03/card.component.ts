import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<h4>App-card</h4><hr><app-block></app-block>',
  styles: [
    // 'h4{ color: gold; font-size: 25px; }',
    // 'hr{ border: 2px solid green; }'
],
// encapsulation: ViewEncapsulation.Emulated
// encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
