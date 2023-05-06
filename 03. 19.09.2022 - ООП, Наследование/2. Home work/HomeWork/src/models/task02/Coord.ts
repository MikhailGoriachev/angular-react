// Класс Координаты
class Coord {
    // широта
    private _y: number;

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value >= -90 && value <= 90 ? value : this._y;
    }

    // долгота
    private _x: number;

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value >= -180 && value <= 180 ? value : this._x;
    }


    // конструктор
    constructor(y: number = Utils.getDouble(-90, 90), x: number = Utils.getDouble(-180, 180)) {
        this._y = y;
        this._x = x;
    }


    toString() {
        return `${this._x.toFixed(7)}N; ${this._y.toFixed(7)}E`;
    }
}
