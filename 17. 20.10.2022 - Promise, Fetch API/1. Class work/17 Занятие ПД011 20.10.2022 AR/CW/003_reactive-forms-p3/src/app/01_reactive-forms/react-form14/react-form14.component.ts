import {Component, OnInit} from '@angular/core';

import {FormGroup, FormControl, Validators} from "@angular/forms";
import {emailValidator} from "./email.validator";
import {BlackListService} from "./blacklist.service";
import {blackListValidator} from "./blacklist.validator";

@Component({
    selector: 'app-react-form14',
    templateUrl: './react-form14.component.html'
})
export class ReactForm14Component implements OnInit {

    registrationForm: FormGroup = null!;
    email: FormControl = null!;
    blockedEmails = this._blackListService.getAllBlockedEmails()

    constructor(private _blackListService: BlackListService) {
    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    } // ngOnInit

    createFormControls() {
        // @ts-ignore
        this.email = new FormControl(
            "",  // начальное значение
            // синхронные валидаторы
            [Validators.required, emailValidator],

            // асинхронный валидатор/асинхронные валидаторы
            blackListValidator(this._blackListService)
        );
    } // createFormControls

    createForm() {
        this.registrationForm = new FormGroup({ email: this.email, });
    } // createForm

    onSubmit(form: FormGroup) {
        console.log(form)
        if (this.registrationForm.valid) {
            console.log("Отправка данных на сервер");
            console.dir(this.registrationForm.value);
        } // if
    } // onSubmit

}
