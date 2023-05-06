import {Injectable} from '@angular/core';
import {Utils} from "../../../assets/Utils";

@Injectable({
    providedIn: 'root'
})
export class CalculateService {

    // получить случайные числа
    get numbers(): { a: number, b: number } {
        return {a: Utils.getDouble(10, 20), b: Utils.getDouble(10, 20)};
    }


    // конструктор
    constructor() {
    }


    // вычисление z1 и z2
    getResult(d: { a: number, b: number }): {z1: number, z2: number} {
        return {
            z1: (Math.cos(d.a) - Math.cos(d.b)) ** 2 - (Math.sin(d.a) - Math.sin(d.b)) ** 2,
            z2: -4 * Math.sin((d.a - d.b) / 2) ** 2 * Math.cos(d.a + d.b)
        };
    }
}
