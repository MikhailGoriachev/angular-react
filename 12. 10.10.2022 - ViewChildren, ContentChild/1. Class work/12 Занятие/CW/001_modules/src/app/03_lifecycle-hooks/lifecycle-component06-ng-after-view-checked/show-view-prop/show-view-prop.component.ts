import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-view-prop',
  templateUrl: './show-view-prop.component.html'
})
export class ShowViewPropComponent implements OnInit {

  constructor() { }

  someValue = 'простая строка';

  editSomeValue(){
    this.someValue = 'новый контент';
  }

  ngOnInit(): void {

  }

}
