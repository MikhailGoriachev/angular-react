import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-block',
  template: '<h4>App-block</h4><hr>',
  styles: [
    // 'h4{ color: brown; font-size: 50px; }',
    // 'hr{ border: 2px solid blue; }'
  ],
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.None
})
export class BlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
