import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding04referense',
  templateUrl: './binding04referense.component.html'
})
export class Binding04ReferenseComponent implements OnInit {

  result = '';
  // Параметры не используются, заданы для успокоения компилятора
  show(elem1, elem2, elem3, elem4){
    this.result = "";
    for(let i = 0; i < arguments.length; i++){
      console.dir(arguments[i]);

      this.result += arguments[i].localName + ', '
    }
  }

  ngOnInit(): void { }

}
