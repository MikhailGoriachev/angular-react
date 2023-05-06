// Класс Самолёт
class Plane extends Vehicle {
    // конструктор
    constructor(name, price, speed, yearOfCreation, coord, passengersCount, height) {
        super(name, price, speed, yearOfCreation, coord);
        this._passengersCount = passengersCount;
        this._height = height;
    }
    get passengersCount() {
        return this._passengersCount;
    }
    set passengersCount(value) {
        this._passengersCount = value >= 0 ? value : this._passengersCount;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    // вывод в строки таблицы
    toTableRow(n) {
        return `
        <tr>
            <td>${n}</td>
            <td>${this.name}</td>
            <td>${this.price}</td>
            <td>${this.speed}</td>
            <td>${this.yearOfCreation}</td>
            <td>${this.coord}</td>
            <td>${this.passengersCount}</td>
            <td>————</td>    
            <td>${this.height}</td>
        </tr>`;
    }
}
//# sourceMappingURL=Plane.js.map