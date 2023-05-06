// Выражение 15
export class Expression15 {

    // число b
    private _b: number = 0;

    get b(): number {
        return this._b;
    }

    set b(value: number) {
        this._b = value > -2 ? value : this._b;
    }

    // z1
    get z1(): number {
        return Math.sqrt(2 * this._b + 2 * Math.sqrt(this._b ** 2 - 4))
            / (Math.sqrt(this._b ** 2 - 4) + this._b + 2);
    }

    // z2
    get z2(): number {
        return 1 / Math.sqrt(this._b + 2);
    }
}
