import {Component, OnInit} from '@angular/core';
import {Expression15} from "../../../models/task01/Expression15";
import {Utils} from "../../../assets/Utils";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-expression15',
    templateUrl: './expression15.component.html'
})
export class Expression15Component implements OnInit {

    // выражение
    expression: Expression15 = new Expression15();

    // форма
    form: FormGroup = new FormGroup({
        b: new FormControl(this.expression.b, [Validators.required, Validators.min(-2 + 1e-10)])
    });

    // событие инициализации компонента
    ngOnInit(): void {
        this.expression.b = Utils.getDouble(5, 10);
    }

    // обработчик формы
    onSubmit(form: FormGroup) {
        this.expression.b = this.form.value.b;
    }
}
