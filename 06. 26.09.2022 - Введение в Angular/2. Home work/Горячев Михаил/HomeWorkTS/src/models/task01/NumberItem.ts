import {IComparator} from "../interfaces/IComparator";
import {Utils} from "../../Utils";

// Класс Элемент очереди для хранения Number
export class NumberItem implements IComparator<NumberItem> {

    // значение
    private _value: number;

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }


    // конструктор
    constructor(value: number = 0) {
        this._value = value;
    }


    // получение значения
    valueOf() {
        return this._value;
    }

    // сравнение
    compareTo(item: NumberItem): number {
        return this._value - item._value;
    }

    // генерация
    static generate(): NumberItem {
        return new NumberItem(Utils.getInt(100, 1000));
    }

    // строковое представление
    toString(): string {
        return this._value.toString();
    }
}
