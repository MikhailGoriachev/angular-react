// Выражение 17
export class Expression17 {

    // число m
    private _m: number = 0;

    get m(): number {
        return this._m;
    }

    set m(value: number) {
        this._m = value > 0 ? value : this._m;
    }

    // z1
    get z1(): number {
        return Math.sqrt((3 * this._m + 2) ** 2 - 24 * this._m)
            / (3 * Math.sqrt(this._m) - (2 / Math.sqrt(this._m)));
    }

    // z2
    get z2(): number {
        return Math.sqrt(this._m);
    }
}
