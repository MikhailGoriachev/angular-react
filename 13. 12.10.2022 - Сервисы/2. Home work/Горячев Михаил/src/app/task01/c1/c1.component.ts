import {Component, OnInit} from '@angular/core';
import {Utils} from "../../../assets/Utils";
import {C2Component} from "./c3/c2/c2.component";
import {C3Component} from "./c3/c3.component";
import {CalculateService} from "../../services/calculateService/calculate.service";

@Component({
    selector: 'app-c1',
    templateUrl: './c1.component.html',
    providers: [CalculateService]
})
export class C1Component implements OnInit {

    // числа
    numbers: { a: number, b: number } = {a: 0, b: 0}


    // конструктор
    constructor(private _service: CalculateService) {
    }


    // обработчик события инициализации компонента
    ngOnInit(): void {
        this.generate();
    }

    // генерация чисел
    generate(): void {
        this.numbers = this._service.numbers;
    }
}
