// Свойство ValueChamges для формы и полей - Observable

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-react-form10',
    templateUrl: './react-form10.component.html',
    styleUrls: ['./react-form10.component.css']
})
export class ReactForm10Component implements OnInit {

    // данные формы
    registrationForm: FormGroup = null!;
    createLoginForm: FormGroup = null!;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.buildRegForm();
        this.buildEmailForm();
    }

    // FIELD valueChanges -----------------------------------------------

    buildRegForm() {
        this.registrationForm = this.formBuilder.group(
            {
                nameEmail: this.formBuilder.control(''),
                createdEmail: this.formBuilder.control(null)
            }
        );

        // подписка на изменения в поле nameEmail
        this.registrationForm.get('nameEmail')!
            .valueChanges
            .subscribe(data => {
                this.registrationForm.get('createdEmail')!.setValue(`${data}@shop.com`)
            });
    }

    // FORM valueChanges -----------------------------------------------

    buildEmailForm() {
        this.createLoginForm = this.formBuilder.group(
            {
                userLogin: this.formBuilder.control(''),
                userEmail: this.formBuilder.control(null)
            }
        );

        // подписка на изменения в форме createLoginForm
        this.createLoginForm
            .valueChanges
            .subscribe(data => {
                console.dir(data);
                this.checkingExisting(data)
            });
    }

    formErrors = {
        existingLogin: '',
        existingEmail: ''
    }

    // имитация таблицы Бд с сообщениями об ошибках (возможно,
    // на разных языках)
    errorMsg = {
        existingLogin: 'Такой логин уже существует',
        existingEmail: 'Email уже занят'
    }

    // проверка на существование логина и пароля нового
    // пользователя
    checkingExisting(data: any) {
        console.log(data);
        let login = this.registeredUsers.some(el => el.userLogin == data.userLogin)
        let email = this.registeredUsers.some(el => el.userEmail == data.userEmail)

        this.formErrors.existingLogin = login
            ?this.errorMsg.existingLogin
            :'';
        this.formErrors.existingEmail = email
            ?this.errorMsg.existingEmail
            :'';
    } // checkingExisting

    // имитация тбалицы БД с зарегистрированными пользователями
    registeredUsers = [
        {
            userLogin: 'admin',
            userEmail: 'admin@shop.com'
        },
        {
            userLogin: 'customer',
            userEmail: 'customer@mail.ru'
        },
        {
            userLogin: 'subscriber',
            userEmail: 'subscriber@shop.com'
        }
    ]

    onSubmit() {
        console.log(this.registrationForm)
        // console.log(this.createEmailForm)
    }
}
