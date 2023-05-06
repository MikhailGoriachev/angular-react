// Класс Координаты
class Coord {
    // конструктор
    constructor(y = Utils.getDouble(-90, 90), x = Utils.getDouble(-180, 180)) {
        this._y = y;
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value >= -90 && value <= 90 ? value : this._y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value >= -180 && value <= 180 ? value : this._x;
    }
    toString() {
        return `${this._x.toFixed(7)}N; ${this._y.toFixed(7)}E`;
    }
}
//# sourceMappingURL=Coord.js.map