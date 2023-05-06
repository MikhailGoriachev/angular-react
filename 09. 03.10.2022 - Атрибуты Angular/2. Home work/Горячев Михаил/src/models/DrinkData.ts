import {Drink} from "./Drink";

// Класс для доступа к данным о напитках
export class DrinkData {

    // данные
    private static _data: Drink[] = [...Array(12)].map(d => Drink.getGenerate());

    static get data(): Drink[] {
        return this._data;
    }

    static set data(value: Drink[]) {
        this._data = value;
    }
}
