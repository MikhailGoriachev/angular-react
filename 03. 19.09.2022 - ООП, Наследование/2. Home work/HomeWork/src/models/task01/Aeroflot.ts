// Класс Перелёт
class Aeroflot {

    // название пункта назначения
    public destination: string;

    // номер рейса
    public flightNumber: string;

    // тип самолёта
    public aircraftType: string;

    // конструктор
    constructor(destination?: string, flightNumber?: string, aircraftType?: string) {
        this.destination = destination;
        this.flightNumber = flightNumber;
        this.aircraftType = aircraftType;
    }

    // вывод в строку таблицы
    toTableRow(n: number): string {
        return `
            <tr>
                <td>${n}</td>
                <td>${this.destination}</td>
                <td>${this.flightNumber}</td>
                <td>${this.aircraftType}</td>
            </tr>
        `;
    }

    assign(other: { destination: string, flightNumber: string, aircraftType: string }): Aeroflot {
        this.destination = other.destination;
        this.flightNumber = other.flightNumber;
        this.aircraftType = other.aircraftType;

        return this;
    }
}
