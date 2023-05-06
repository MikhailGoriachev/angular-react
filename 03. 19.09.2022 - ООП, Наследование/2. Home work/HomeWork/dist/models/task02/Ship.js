// Класс Корабль
class Ship extends Vehicle {
    // конструктор
    constructor(name, price, speed, yearOfCreation, coord, passengersCount, port) {
        super(name, price, speed, yearOfCreation, coord);
        this._passengersCount = passengersCount;
        this._port = port;
    }
    get passengersCount() {
        return this._passengersCount;
    }
    set passengersCount(value) {
        this._passengersCount = value;
    }
    get port() {
        return this._port;
    }
    set port(value) {
        this._port = value;
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
            <td>${this.port}</td>    
            <td>————</td>
        </tr>`;
    }
}
//# sourceMappingURL=Ship.js.map