import { Component, OnInit } from '@angular/core';
// https://rxjs.dev/
@Component({
  selector: 'app-rx-js01',
  templateUrl: './rx-js01.component.html'
})
export class RxJs01Component implements OnInit {

  constructor() { }
  toggle: boolean = false;

  ngOnInit(): void {
  }

}
