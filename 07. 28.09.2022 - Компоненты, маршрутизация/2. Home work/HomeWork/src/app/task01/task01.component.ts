import {Component, OnInit} from '@angular/core';
import {Utils, $} from "../../assets/Utils";

@Component({
    selector: 'app-task01',
    templateUrl: './task01.component.html',
    styleUrls: ['./task01.component.css']
})
export class Task01Component implements OnInit {

    // z1
    get z1(): number {
        return Math.cos((3 / 8) * Math.PI - (this.a / 4)) ** 2
            - Math.cos((11 / 8) * Math.PI + (this.a / 4)) ** 2;
    }

    // z2
    get z2(): number {
        return (Math.sqrt(2) / 2) * Math.sin(this.a / 2);
    }

    // alpha
    private _a: number = 0;

    get a(): number {
        return this._a;
    }

    set a(value: number) {
        this._a = value;
    }


    // конструктор
    constructor() {

    }


    // обработчик события инициализации модуля
    ngOnInit(): void {
        // установка активности в панели навигации
        Utils.setNavTabActive("task01");

        // генерация данных
        this._a = Utils.getDouble(10, 20);

        // элементы для вывода
        let output = {
            alpha: $("alphaId"),
            z1: $("z1Id"),
            z2: $("z2Id"),
        };

        // обработчик события нажатия на кнопку для генерации
        $("generateId")?.addEventListener("click", () => {
            this._a = Utils.getDouble(10, 20);

            output.alpha!.innerHTML = this._a.toFixed(7);
            output.z1!.innerHTML = this.z1.toFixed(7);
            output.z2!.innerHTML = this.z2.toFixed(7);
        });
    }
}
