import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-component01-all',
  templateUrl: './lifecycle-component01-all.component.html'
})
export class LifecycleComponent01AllComponent implements OnInit {

  constructor() { }
  show: boolean = false;
  ngOnInit(): void {}

}
