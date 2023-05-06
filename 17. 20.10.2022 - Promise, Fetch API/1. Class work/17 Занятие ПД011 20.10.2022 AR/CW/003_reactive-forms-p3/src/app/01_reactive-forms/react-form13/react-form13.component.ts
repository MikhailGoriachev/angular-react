import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {asyncEmailValidator} from "./async-email.validator";

@Component({
    selector: 'app-react-form13',
    templateUrl: './react-form13.component.html',
    styles: [`
        input[type='submit']:not(:disabled) {
            background: lightgreen;
        }

        .verification {
            padding: 10px;
            border: 2px solid gold;
        }

        .error-alert {
            padding: 10px;
            border: 2px solid pink;
        }
    `
    ]
})
export class ReactForm13Component implements OnInit {

    registrationForm: FormGroup = null!;
    email: FormControl = null!;

    constructor() {
    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    } // ngOnInit

    createFormControls() {
        // @ts-ignore
        this.email = new FormControl("",
            // синхронный валидатор/массив синхронных валидаторов
            Validators.required, // [Validators.required]
            // асинхронный валидатор/массив асинхронных валидаторов
            asyncEmailValidator // [asyncEmailValidator]
        );
    }

    createForm() {
        this.registrationForm = new FormGroup({
            email: this.email
        });
    } // createForm

    onSubmit() {
        if (this.registrationForm.valid) {
            console.log("Отправка данных на сервер");
            console.log(this.registrationForm.value);
        } // if
    } // onSubmit

} // class ReactForm13Component
