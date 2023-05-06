import { Component, OnInit } from '@angular/core';

// пример на передачу в дочерний компнент контента через разметку, ng-context
// в коде ничего для этого делать не надо
@Component({
  selector: 'app-data-pass03-ng-content',
  templateUrl: './data-pass03-ng-content.component.html',
  styleUrls: ['./data-pass03-ng-content.component.css']
})
export class DataPass03NgContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
