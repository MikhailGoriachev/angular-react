import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-react-form04',
  templateUrl: './react-form04.component.html',
  styleUrls: ['./react-form04.component.css']
})
export class ReactForm04Component implements OnInit {

  constructor() { }
  loginForm: any = null!;
  formData: any = null!;

  ngOnInit() {
    // создание кода для элементов ввода
    this.loginForm = new FormGroup({
      login:    new FormControl("", Validators.required),
      password: new FormControl(null, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)]),
      agree:    new FormControl("", Validators.requiredTrue)
    });
  }


  onSubmit(form: FormGroup) {
    console.log(form);
    // Spread оператор для копирования объекта
    // Есть объект формы под именем свойства "value" и все его ключи
    // и значения копируются в другой объект который нам нужно
    this.formData = { ...this.loginForm.value }
    console.dir(this.formData);

    //Очищает форму после отправки данных
    this.loginForm.reset();
  }

  // обработчик клика по кнопке для отображения объекта формы в консоли
  showDir(loginForm: any) {
    console.dir(loginForm);
  }
}
