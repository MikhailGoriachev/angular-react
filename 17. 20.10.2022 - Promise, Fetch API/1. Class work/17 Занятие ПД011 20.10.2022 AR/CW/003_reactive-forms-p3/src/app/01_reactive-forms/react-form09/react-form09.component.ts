// способвы вывода сообщений об ошибках
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-react-form09',
    templateUrl: './react-form09.component.html',
    styleUrls: ['./react-form09.component.css']
})
export class ReactForm09Component implements OnInit {

    constructor() { }

    // данные формы
    registerForm: FormGroup = null!;

    ngOnInit() {
        this.registerForm = new FormGroup({
            userName: new FormControl("", [Validators.required, Validators.minLength(7)]),
            emailFiled: new FormControl(null, [Validators.required, Validators.email])
        });
    } // ngOnInit

    // вывод текущего состояния формы
    showLog(form: FormGroup) {
        console.log(form)
    }

    onSubmit(form: FormGroup) {
        if (this.registerForm.valid) {
            console.log(form);
            console.log(form.value);

            //Очищает форму после отправки данных
            this.registerForm.reset();
        } // if
    } // onSubmit
} // class ReactForm09Component
