// Класс Самолёт
class Plane extends Vehicle {

    // количество пассажиров
    private _passengersCount: number;

    get passengersCount(): number {
        return this._passengersCount;
    }

    set passengersCount(value: number) {
        this._passengersCount = value >= 0 ? value : this._passengersCount;
    }

    // высота
    private _height: number;

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }


    // конструктор
    constructor(name: string, price: number, speed: number, yearOfCreation: number, coord: Coord, passengersCount: number, height: number) {
        super(name, price, speed, yearOfCreation, coord);
        this._passengersCount = passengersCount;
        this._height = height;
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
            <td>————</td>    
            <td>${this.height}</td>
        </tr>`;
    }
}
