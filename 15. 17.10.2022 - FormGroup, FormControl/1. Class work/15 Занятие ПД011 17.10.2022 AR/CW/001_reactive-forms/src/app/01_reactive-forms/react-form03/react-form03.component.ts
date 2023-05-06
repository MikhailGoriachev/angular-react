import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-react-form03',
  templateUrl: './react-form03.component.html',
  styleUrls: ['./react-form03.component.css']
})
export class ReactForm03Component implements OnInit {

  // FormGroup - группа управления полями формы (FormControl)
  // это свойство представляет форму
  registrationForm: FormGroup= null!;

  ngOnInit() {
      // создать объекты для контролов формы
      this.registrationForm = new FormGroup({
          // FormControl - класс, создаем поле которым будем управлять
          userLogin: new FormControl("Логин"),
          userPass: new FormControl(),
          fullName: new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(null)
          })
      });
  }

  onSubmit(form: any) {
      console.dir(form);
      // console.log(form);
      // console.log(form.valid);
      console.dir(form.value);
  }

}
