import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { ContentChildrenBlockComponent } from '../content-children-block/content-children-block.component';

@Component({
  selector: 'app-content-children-container',
  templateUrl: './content-children-container.component.html'
})
export class ContentChildrenContainerComponent implements OnInit {

  constructor() { }
  // получить все дочерние компоненты заданного типа (ContentChildrenBlockComponent)
  // @ContentChildren(ContentChildrenBlockComponent) blocks: QueryList<ContentChildrenBlockComponent> = null!; // new QueryList<ContentChildrenBlockComponent>();

  // получить только помеченные компоненты
  @ContentChildren('selected') blocks: QueryList<ContentChildrenBlockComponent> = null!; // new QueryList<ContentChildrenBlockComponent>();

  toggle(){
    console.log(this.blocks);
    this.blocks.forEach(block => block.toggleBgBlock())
  }

  ngOnInit(): void {
  }
}
