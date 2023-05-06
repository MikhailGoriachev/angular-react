// Использование сервиса FormBuilder
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-react-form06',
  templateUrl: './react-form06.component.html',
  styleUrls: ['./react-form06.component.css']
})
export class ReactForm06Component implements OnInit {
   // внедрить сервис FormBuilder
  constructor(private fb: FormBuilder) { }

  form: FormGroup = null!;

  ngOnInit() {
      this.form = this.fb.group({
          // контрол без инициализации, без валидации
          login: null,  // можно указать ""

          // контрол с инициализацией и валидацией
          // если инициализация не нужна - задаем null
          // email: [null, [Validators.email, Validators.required]],
          email: ["abc@fef.com", [Validators.email, Validators.required]],

          // создание группы контролов
          name: this.fb.group({
                fName: this.fb.control('Иван', Validators.required),
                lName: this.fb.control('Самолевич', [Validators.required, Validators.minLength(4)]),
          }),

          // создание массива контролов
          contacts: this.fb.array([
            this.fb.control('мобильный'),
            this.fb.control('рабочий'),
        ])
      });
  } // ngOnInit

  onSubmit(form: FormGroup) {
      console.log(form);
      console.log(form.value);
  } // onSubmit

} // class ReactForm06Component
