import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Utils} from "../../../assets/Utils";
import {Expression17} from "../../../models/task01/Expression17";

@Component({
    selector: 'app-expression17',
    templateUrl: './expression17.component.html'
})
export class Expression17Component implements OnInit {

    // выражение
    expression: Expression17 = new Expression17();

    // форма
    form: FormGroup = new FormGroup({
        m: new FormControl(this.expression.m, [Validators.required, Validators.min(1e-10)])
    });

    // событие инициализации компонента
    ngOnInit(): void {
        this.expression.m = Utils.getDouble(5, 10);
    }

    // обработчик формы
    onSubmit(form: FormGroup) {
        this.expression.m = this.form.value.m;
    }
}
