import {Component, OnInit} from '@angular/core';
import {Utils} from "../../../assets/Utils";
import {C2Component} from "./c3/c2/c2.component";
import {C3Component} from "./c3/c3.component";

@Component({
    selector: 'app-c1',
    templateUrl: './c1.component.html'
})
export class C1Component implements OnInit {

    // числа
    numbers: { a: number, b: number } = {a: 0, b: 0}

    constructor() {
    }

    ngOnInit(): void {
        this.generate();
    }

    // генерация чисел
    generate(): void {
        this.numbers = {a: Utils.getDouble(10, 20), b: Utils.getDouble(10, 20)}
    }
}
