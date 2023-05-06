import { Component, OnInit, ViewChildren, QueryList, ContentChild } from '@angular/core';
import { ViewChildrenComponent } from './view-children/view-children.component';

@Component({
  selector: 'app-data-pass05-view-children',
  templateUrl: './data-pass05-view-children.component.html'
})
export class DataPass05ViewChildrenComponent implements OnInit {

  // доступ ко всем дочерним компонентам
  @ViewChildren(ViewChildrenComponent) blocks: QueryList<ViewChildrenComponent> = null!; // new QueryList<any>();

  // доступ к дочерним компонентам с именем #selectedComponent
  // @ViewChildren('selectedComponent') blocks: QueryList<any>= null!; //  = new QueryList<any>()

  // выполнение метода changeColorChild на всех дочерних компонентах
  addClass(){
    this.blocks.forEach(component => component.changeColorChild())
    console.log(this.blocks)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
