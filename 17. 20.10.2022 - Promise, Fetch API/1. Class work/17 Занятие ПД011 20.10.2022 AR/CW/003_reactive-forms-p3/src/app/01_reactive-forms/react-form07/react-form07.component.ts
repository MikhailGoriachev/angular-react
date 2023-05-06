// добавление и удаление контролов с валидацией
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-react-form07',
    templateUrl: './react-form07.component.html',
    styleUrls: ['./react-form07.component.css']
})
export class ReactForm07Component implements OnInit {

    form: FormGroup = null!;
    name: FormControl = null!;
    emailFiled: FormControl = null!;

    // переключтель для управления контролом emailFiled
    toggle: boolean = false;

    constructor() {
    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();

        // создать объект, не включать его в форму
        this.emailFiled = new FormControl()
    }

    createFormControls() {
        this.name = new FormControl("");
    }

    createForm() {
        this.form = new FormGroup({
            name: this.name,
            msg: new FormControl()
        });
    }

    // добавить/удалить контрол из шаблона к форме (вместе с валидаторами)
    subscribe() {
        this.toggle = !this.toggle;

        if (this.toggle) {
            // включение в форму
            // 1. установить валидаторы
            // 2. добавить в форму
            this.emailFiled.setValidators([Validators.required, Validators.email]);
            this.form.addControl('email', this.emailFiled);
        } else {
            this.form.removeControl('email');
            this.emailFiled.clearValidators();
        }
        console.log(this.form)
    } // subscribe

    onSubmit() {
        if (this.form.valid && this.form.status === "VALID") {
            console.log("Отправка данных на сервер");
            console.dir(this.form.value);
        } // if
    } // onSubmit
} // class ReactForm07Component
