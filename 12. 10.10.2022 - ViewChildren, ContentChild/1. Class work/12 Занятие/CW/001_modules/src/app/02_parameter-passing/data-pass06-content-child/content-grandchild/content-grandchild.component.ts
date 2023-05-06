import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-grandchild',
  templateUrl: './content-grandchild.component.html'
})
export class ContentGrandchildComponent implements OnInit {

  constructor() { }
  colorProperty: string = "lightskyblue";
  ngOnInit(): void {
  }
  grandchildMethod(){
    this.colorProperty = this.colorProperty == 'lightskyblue' ? 'lightgreen':'lightskyblue';
  }
}
