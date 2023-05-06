// Класс Корабль
class Ship extends Vehicle {

    // количество пассажиров
    private _passengersCount: number;

    get passengersCount(): number {
        return this._passengersCount;
    }

    set passengersCount(value: number) {
        this._passengersCount = value;
    }

    // порт приписки
    private _port: string;

    get port(): string {
        return this._port;
    }

    set port(value: string) {
        this._port = value;
    }


    // конструктор
    constructor(name: string, price: number, speed: number, yearOfCreation: number, coord: Coord, passengersCount: number, port: string) {
        super(name, price, speed, yearOfCreation, coord);
        this._passengersCount = passengersCount;
        this._port = port;
    }


    // вывод в строки таблицы
    toTableRow(n: number): string {
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
