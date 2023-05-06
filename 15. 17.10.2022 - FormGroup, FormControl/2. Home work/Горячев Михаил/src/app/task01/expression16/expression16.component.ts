import {Component, OnInit} from '@angular/core';
import {Expression16} from "../../../models/task01/Expression16";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Utils} from "../../../assets/Utils";

@Component({
    selector: 'app-expression16',
    templateUrl: './expression16.component.html'
})
export class Expression16Component implements OnInit {

    // выражение
    expression: Expression16 = new Expression16();

    // форма
    form: FormGroup = new FormGroup({
        x: new FormControl(this.expression.x, [Validators.required, Validators.min(3 + 1e-10)])
    });

    // событие инициализации компонента
    ngOnInit(): void {
        this.expression.x = Utils.getDouble(5, 10);
    }

    // обработчик формы
    onSubmit(form: FormGroup) {
        this.expression.x = this.form.value.x;
    }
}
