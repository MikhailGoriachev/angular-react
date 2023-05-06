import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-field',
  templateUrl: './view-field.component.html',
  styles: [`
        .bg{
            background: aqua;
        }

        .myborder{
            border: 2px solid green;
        }
  `]
})
export class ViewFieldComponent implements OnInit {

  constructor() { }

  text = 'Текст с viewFiled.component';

  getText(){
    return this.text;
  }

  changedProperty = 'текст по умолчанию';
  editField(fieldText: string){
    this.changedProperty = fieldText;
    console.log('!!!! editField work ------------------')
  }
  updateProp(){
    console.log('!!!! updateProp work ------------------')
    return this.changedProperty = 'маленькое изменение';
  }


  ngOnInit(): void {

  }

}
