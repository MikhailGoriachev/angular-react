import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe02',
  templateUrl: './pipe02.component.html'
})
export class Pipe02Component implements OnInit {


  date: Date = new Date(2022, 9, 3);


  constructor() { }
  ngOnInit(): void {
  }

}
