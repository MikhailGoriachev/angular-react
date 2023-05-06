// Класс Транспортное средство
// Классы должны иметь возможность задавать и получать координаты и параметры средств передвижения (цена, скорость,
// год выпуска) с помощью аксессоров.
class Vehicle {
    // конструктор
    constructor(name, price, speed, yearOfCreation, coord) {
        this._name = name;
        this._price = price;
        this._speed = speed;
        this._yearOfCreation = yearOfCreation;
        this._coord = coord;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value;
    }
    get yearOfCreation() {
        return this._yearOfCreation;
    }
    set yearOfCreation(value) {
        this._yearOfCreation = value;
    }
    get coord() {
        return this._coord;
    }
    set coord(value) {
        this._coord = value;
    }
    // вывод в строки таблицы
    toTableRow(n) {
        return "";
    }
}
//# sourceMappingURL=Vehicle.js.map