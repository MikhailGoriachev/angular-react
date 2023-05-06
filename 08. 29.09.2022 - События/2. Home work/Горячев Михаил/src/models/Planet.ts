// Солнечной системы – название, среднее расстояние до Солнца, радиус, масса, изображение,
// количество известных спутников, группа (газовый гигант, ледяной гигант, земной тип)

// Класс Планета
export class Planet {

    // название
    private _name: string = "";

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    // среднее расстояние до Солнца
    private _avgDistance: number = 0;

    get avgDistance(): number {
        return this._avgDistance;
    }

    set avgDistance(value: number) {
        this._avgDistance = value;
    }

    // масса
    private _mass: number = 0;

    get mass(): number {
        return this._mass;
    }

    set mass(value: number) {
        this._mass = value;
    }

    // изображение
    private _image: string = "";

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    // количество известных спутников
    private _amountSatellites: number = 0;

    get amountSatellites(): number {
        return this._amountSatellites;
    }

    set amountSatellites(value: number) {
        this._amountSatellites = value;
    }

    // группа (газовый гигант, ледяной гигант, земной тип)
    private _group: string = "";

    get group(): string {
        return this._group;
    }

    set group(value: string) {
        this._group = value;
    }


    // конструктор
    constructor(name: string, avgDistance: number, mass: number, image: string, amountSatellites: number, group: string) {
        this._name = name;
        this._avgDistance = avgDistance;
        this._mass = mass;
        this._image = image;
        this._amountSatellites = amountSatellites;
        this._group = group;
    }
}
