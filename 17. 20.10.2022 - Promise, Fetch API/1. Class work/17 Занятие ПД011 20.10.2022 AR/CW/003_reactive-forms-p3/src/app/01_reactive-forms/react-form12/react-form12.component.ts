import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {match} from './match.validator';

@Component({
    selector: 'app-react-form12',
    templateUrl: './react-form12.component.html',
    styles: [`div {
        padding: 5px;
        background: pink;
    }`]
})
export class ReactForm12Component implements OnInit {

    registrationForm: FormGroup = null!;
    login: FormControl = null!;
    password: FormControl = null!;
    passwordConfirm: FormControl = null!;

    constructor() {
    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    } // ngOnInit

    createFormControls() {
        this.login = new FormControl("", Validators.required);
        this.password = new FormControl("", [
            Validators.minLength(8),
            Validators.required
        ]);
        this.passwordConfirm = new FormControl("", [
            Validators.required
        ]);
    } // createFormControls

    // !!! валидатор match() назначен на форму !!!
    createForm() {
        this.registrationForm = new FormGroup({
            login: this.login,
            password: this.password,
            passwordConfirm: this.passwordConfirm
        }, {validators: match(this.password, this.passwordConfirm)});
    } // createForm

    onSubmit() {
        console.log(this.registrationForm)
        if (this.registrationForm.valid) {
            console.log("Отправка данных на сервер");
            console.dir(this.registrationForm.value);
        } // if
    } // onSubmit
} // class ReactForm12Component
