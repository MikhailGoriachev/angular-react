// Выражение 16
export class Expression16 {

    // число x
    private _x: number = 0;

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value > 3 ? value : this._x;
    }

    // z1
    get z1(): number {
        return (this._x ** 2 + 2 * this._x - 3 + (this._x + 1) * Math.sqrt(this._x ** 2 - 9))
            / (this._x ** 2 - 2 * this._x - 3 + (this._x - 1) * Math.sqrt(this._x ** 2 - 9));
    }

    // z2
    get z2(): number {
        return Math.sqrt((this._x + 3) / (this._x - 3));
    }
}
