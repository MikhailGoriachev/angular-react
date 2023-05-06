// Класс Транспортное средство
// Классы должны иметь возможность задавать и получать координаты и параметры средств передвижения (цена, скорость,
// год выпуска) с помощью аксессоров.
abstract class Vehicle {

    // название
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    // цена
    private _price: number;

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    // скорость
    private _speed: number;

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    // год выпуска
    private _yearOfCreation: number;

    get yearOfCreation(): number {
        return this._yearOfCreation;
    }

    set yearOfCreation(value: number) {
        this._yearOfCreation = value;
    }

    // координаты
    private _coord: Coord;

    get coord(): Coord {
        return this._coord;
    }

    set coord(value: Coord) {
        this._coord = value;
    }


    // конструктор
    constructor(name: string, price: number, speed: number, yearOfCreation: number, coord: Coord) {
        this._name = name;
        this._price = price;
        this._speed = speed;
        this._yearOfCreation = yearOfCreation;
        this._coord = coord;
    }

    // вывод в строки таблицы
    toTableRow(n: number): string {
        return "";
    }
}
