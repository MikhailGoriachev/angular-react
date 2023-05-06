import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDataValidation, passportFunc} from "./custom-validators";

@Component({
    selector: 'app-react-form11',
    templateUrl: './react-form11.component.html',
    styleUrls: ['./react-form11.component.css']
})
export class ReactForm11Component implements OnInit {

    userForm: FormGroup = null!;

    // для ввода данных в форму, максимальный допустимый год рождения: текущий год - 17
    maxBirthYear: number = new Date().getFullYear() - 17;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.userForm = this.fb.group({
            "passportUser": ['', [
                Validators.required,

                // подключение пользовательского валидатора без параметров
                // UserDataValidation.passport
                passportFunc
            ]],
            "birthYearUser": ['', [
                Validators.required,

                // подключение пользовательского валидатора с параметрами
                UserDataValidation.birthYear(1955, this.maxBirthYear)
            ]]
        });
    } // ngOnInit

    onSubmit() {
        console.log("submitted");
        console.log(this.userForm.value);
    } // onSubmit

    showForm(form: FormGroup) {
        console.log(form)
    } // showForm
} // class ReactForm11Component
