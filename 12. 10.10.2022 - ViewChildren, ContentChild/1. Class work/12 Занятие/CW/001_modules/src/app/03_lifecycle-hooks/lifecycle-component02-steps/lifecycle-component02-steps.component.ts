import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-component02-steps',
  templateUrl: './lifecycle-component02-steps.component.html'
})
export class LifecycleComponent02StepsComponent implements OnInit {

  constructor() { }
  show = false;
  ngOnInit(): void {
  }

}
