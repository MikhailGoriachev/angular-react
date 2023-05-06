// Класс Напиток

import {Utils} from "src/assets/Utils";

// название, объем, цена, признак напитка на вынос, топпер – название или строка «нет», фото напитка при подаче
export class Drink {

    // название
    private _name: string = "";

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    // объём
    private _volume: number = 0;

    get volume(): number {
        return this._volume;
    }

    set volume(value: number) {
        this._volume = value;
    }

    // цена
    private _price: number = 0;

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    // признак напитка на вынос
    private _isDrinkToGo: boolean = false;

    get isDrinkToGo(): boolean {
        return this._isDrinkToGo;
    }

    set isDrinkToGo(value: boolean) {
        this._isDrinkToGo = value;
    }

    // топпер (название или строка "нет")
    private _topper: string = "нет";

    get topper(): string {
        return this._topper;
    }

    set topper(value: string) {
        this._topper = value;
    }

    // фото напитка
    private _image: string = "";

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }


    // конструктор
    constructor(name?: string, volume?: number, price?: number, isDrinkToGo?: boolean, topper?: string, image?: string) {
        this._name = name ?? this._name;
        this._volume = volume ?? this._volume;
        this._price = price ?? this._price;
        this._isDrinkToGo = isDrinkToGo ?? this._isDrinkToGo;
        this._topper = topper ?? this._topper;
        this._image = image ?? this._image;
    }


    // генерация данных
    static getGenerate(): Drink {
        let data = Utils.getDrinkName();
        return new Drink(
            data.name,
            Utils.getVolumeDrink(),
            Utils.getInt(7, 20) * 10,
            (Math.random() * 10 & 1) === 1,
            Utils.getTopper(),
            data.image
        );
    }
}
