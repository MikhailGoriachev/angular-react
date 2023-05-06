import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styles: [`
      .bg{
        background: lightgreen;
    }
  `]
})
export class ViewChildrenComponent implements OnInit {

  // свойство, управляющее стилевым классом bg
  bgToggle: boolean  = false;

  constructor() { }
  changeColorChild(){
    this.bgToggle = !this.bgToggle;
  }

  ngOnInit(): void {  }

}
