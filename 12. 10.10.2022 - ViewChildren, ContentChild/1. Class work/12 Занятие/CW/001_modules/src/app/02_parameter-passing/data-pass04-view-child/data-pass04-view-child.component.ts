import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-data-pass04-view-child',
  templateUrl: './data-pass04-view-child.component.html',
  styleUrls: ['./data-pass04-view-child.component.css']
})
export class DataPass04ViewChildComponent implements OnInit {

  // Доступ к только первому компоненту
  // @ViewChild(ТипКомпонента)
  @ViewChild(ViewChildComponent) childBlock: ViewChildComponent = new ViewChildComponent();
  changeColor(){
    this.childBlock.childMethod();
    console.log(this.childBlock);
  }

  // Доступ к конкретному компоненту в шаблоне (разметке) через ссылку на этот компонент
  // имя ссылки в разметке #имя, но досуп к компоненту - через ТипКомпонент
  @ViewChild('secondViewChild') sViewBlock: ViewChildComponent = new ViewChildComponent();
  secondChangeColor(){
    this.sViewBlock.childMethod();
  }

  // Доступ к конкретному элементу разметки в шаблоне (разметке) по #имяЭлемента
  // при этом используем тип ElementRef
  @ViewChild('mainInput') elementInp: ElementRef = new ElementRef("");

  p: string = 'Текст из поля ввода'

  takeFocus() {
    this.elementInp.nativeElement.focus()
  }

  takeValue() {
    this.p = this.elementInp.nativeElement.value;
    console.log(this.elementInp.nativeElement)
    console.dir(this.elementInp)
    console.dir(this.elementInp.nativeElement)
  }

  // сюжетно не важная часть кода...
  constructor() { }

  ngOnInit(): void {
  }

}
