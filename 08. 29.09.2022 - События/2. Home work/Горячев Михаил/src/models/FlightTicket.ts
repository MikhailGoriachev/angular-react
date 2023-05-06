// Класс Заявка на авиабилет
import {Utils} from "../assets/Utils";

export class FlightTicket {

    // пункт назначения
    destination: string = "";

    // номер рейса
    flightNumber: string = "";

    // фамилию и инициалы пассажира
    fullName: string = "";

    // стоимость билета
    price: number = 0;


    // конструктор
    constructor(destination?: string, flightNumber?: string, fullName?: string, price?: number) {
        this.destination = destination ?? this.destination;
        this.flightNumber = flightNumber ?? this.flightNumber;
        this.fullName = fullName ?? this.fullName;
        this.price = price ?? this.price;
    }


    // сгенерировать данные
    static generate(): FlightTicket {
        let person = Utils.getFullName("none");

        return new FlightTicket(
            Utils.getDestination(),
            Utils.getFlightNumber(),
            `${person.surname} ${person.name[0]}. ${person.patronymic[0]}`,
            Utils.getInt(3, 15) * 1000
        )
    }
}
