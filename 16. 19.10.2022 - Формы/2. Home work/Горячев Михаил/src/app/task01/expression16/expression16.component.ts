import {Component, OnInit} from '@angular/core';
import {Expression16} from "../../../models/task01/Expression16";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Utils} from "../../../assets/Utils";
import {minGreatValidator} from "../../../validators/minGreatValidator";

@Component({
    selector: 'app-expression16',
    templateUrl: './expression16.component.html'
})
export class Expression16Component implements OnInit {

    // выражение
    expression: Expression16 = new Expression16();

    // контрол
    controlX!: FormControl;

    // форма
    form: FormGroup = this._fb.group({
        x: this.controlX = this._fb.control(this.expression.x, [Validators.required, minGreatValidator(3)])
    });

    // утилиты
    Utils = Utils;


    // конструктор
    constructor(private _fb: FormBuilder) {
    }


    // событие инициализации компонента
    ngOnInit(): void {
        this.expression.x = Utils.getDouble(5, 10);
    }

    // обработчик формы
    onSubmit(form: FormGroup) {
        this.expression.x = this.form.value.x;
    }
}
