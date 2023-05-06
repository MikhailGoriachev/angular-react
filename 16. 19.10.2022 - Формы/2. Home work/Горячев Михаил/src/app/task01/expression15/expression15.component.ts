import {Component, OnInit} from '@angular/core';
import {Expression15} from "../../../models/task01/Expression15";
import {Utils} from "../../../assets/Utils";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {minGreatValidator} from "../../../validators/minGreatValidator";

@Component({
    selector: 'app-expression15',
    templateUrl: './expression15.component.html'
})
export class Expression15Component implements OnInit {

    // выражение
    expression: Expression15 = new Expression15();

    // контрол
    controlB!: FormControl;

    // форма
    form = this._fb.group({
        b: this.controlB = this._fb.control(this.expression.b, [Validators.required, minGreatValidator(2)])
    })

    // утилиты
    Utils = Utils;


    // конструктор
    constructor(private _fb: FormBuilder) {
    }


    // событие инициализации компонента
    ngOnInit(): void {
        this.expression.b = Utils.getDouble(5, 10);
    }

    // обработчик формы
    onSubmit(form: FormGroup) {
        this.expression.b = +this.controlB.value!;
    }
}
