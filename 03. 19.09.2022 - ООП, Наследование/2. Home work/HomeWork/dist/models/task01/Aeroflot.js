// Класс Перелёт
class Aeroflot {
    // конструктор
    constructor(destination, flightNumber, aircraftType) {
        this.destination = destination;
        this.flightNumber = flightNumber;
        this.aircraftType = aircraftType;
    }
    // вывод в строку таблицы
    toTableRow(n) {
        return `
            <tr>
                <td>${n}</td>
                <td>${this.destination}</td>
                <td>${this.flightNumber}</td>
                <td>${this.aircraftType}</td>
            </tr>
        `;
    }
    assign(other) {
        this.destination = other.destination;
        this.flightNumber = other.flightNumber;
        this.aircraftType = other.aircraftType;
        return this;
    }
}
//# sourceMappingURL=Aeroflot.js.map