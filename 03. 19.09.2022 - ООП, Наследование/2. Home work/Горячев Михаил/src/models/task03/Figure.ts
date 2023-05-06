// Класс Фигура
abstract class Figure {
    // название фигуры
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }


    // конструктор
    constructor(name: string) {
        this._name = name;
    }
}
