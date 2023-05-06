import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';
import { ContentGrandchildComponent } from '../content-grandchild/content-grandchild.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html'
})
export class ContentChildComponent implements OnInit {

  constructor() { }

  // варианты привязки к контенту для обработки:
  // 1. По #имя, обработка возможна толлко для помеченных элементов
  @ContentChild('elem') elem: ElementRef = null!; // new ElementRef<any>("elem");

  // 2. По типу, обработка для всех компонентов данного типа
  @ContentChild(ContentGrandchildComponent) componentElement: ContentGrandchildComponent = null!; // new ContentGrandchildComponent();

  ngOnInit(): void {}

  // переключение контента полученных элементов
  toggleContnet(){
    // обработка элементов с привязкой по #имя
    if(this.elem){
      console.log(this.elem)
      console.log(this.elem.nativeElement)
      this.elem.nativeElement.innerHTML = '2 - Новый текст!';
    }

    // обработка элементов с привязкой по типу
    if (this.componentElement){
      console.log(this.componentElement)
      this.componentElement.grandchildMethod()
    }
  }
}
