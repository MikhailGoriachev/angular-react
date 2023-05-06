import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Utils} from "../../../assets/Utils";
import {Expression17} from "../../../models/task01/Expression17";
import {minGreatValidator} from "../../../validators/minGreatValidator";

@Component({
    selector: 'app-expression17',
    templateUrl: './expression17.component.html'
})
export class Expression17Component implements OnInit {

    // выражение
    expression: Expression17 = new Expression17();

    // контрол
    controlM!: FormControl;

    // форма
    form: FormGroup = this._fb.group({
        m: this.controlM = this._fb.control(this.expression.m, [Validators.required, minGreatValidator(0)])
    });

    // утилиты
    Utils = Utils;


    // конструктор
    constructor(private _fb: FormBuilder) {
    }


    // событие инициализации компонента
    ngOnInit(): void {
        this.expression.m = Utils.getDouble(5, 10);
    }

    // обработчик формы
    onSubmit(form: FormGroup) {
        this.expression.m = this.form.value.m;
    }
}
