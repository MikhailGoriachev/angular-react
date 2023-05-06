// Класс Транспортная компания
import {Bus} from "./Bus";
import {Utils} from "../../Utils";
import {BusState} from "./BusState";

export class TransportCompany {

    // автобусы
    get buses(): Bus[] {
        return Array.from(this._busFleet.values()).concat(Array.from(this._busRoute.values()));
    }

    // автобусы в парке
    private _busFleet: Map<string, Bus>;

    get busFleet(): Map<string, Bus> {
        return this._busFleet;
    }

    set busFleet(value: Map<string, Bus>) {
        this._busFleet = value;
    }

    // автобусы на маршруте
    private _busRoute: Map<string, Bus>;

    get busRoute(): Map<string, Bus> {
        return this._busRoute;
    }

    set busRoute(value: Map<string, Bus>) {
        this._busRoute = value;
    }


    // конструктор
    constructor(busFleet: Map<string, Bus> = new Map(), busRoute: Map<string, Bus> = new Map()) {
        this._busFleet = busFleet;
        this._busRoute = busRoute;
    }


    // инициализация
    init() {

        // функция инициализации
        let initFunc = () => new Map(([...Array(Utils.getInt(10, 20))]
            .map(() => new Bus()))
            .map(b => [b.plate, b])
        );

        // автобусы в парке
        this._busFleet = initFunc();

        // автобусы на маршруте
        this._busRoute = initFunc();
    }

    // перемещение автобуса
    gotoBus(busPlate: string, busState: BusState) {

        let swap = (a: Map<string, Bus>, b: Map<string, Bus>, plate: string) => {
            a.set(plate, b.get(plate));
            b.delete(plate);
        }

        // перемещение автобуса
        switch (busState) {
            case BusState.busFleet:
                swap(this._busRoute, this._busFleet, busPlate);
                break;

            case BusState.busRoute:
                swap(this._busFleet, this._busRoute, busPlate)
                break;
        }

        // busState === BusState.busFleet
        //     ? swap(this._busRoute, this._busFleet, busPlate)
        //     : swap(this._busFleet, this._busRoute, busPlate);
    }

    // итератор для прохождения по всем автобусам
    [Symbol.iterator]() {
        let i = 0;
        let data = this.buses.sort((a, b) => a.driver.fullName.localeCompare(b.driver.fullName));

        return {
            next() {
                return i < data.length ? {done: false, value: data[i++]} : {done: true, value: null};
            }
        }
    }

    // генератор для прохождения по всем автобусам упорядоченым по номерам автобусов
    * generatorBusOrderByPlate() {
        // упорядочивание коллекции по номерам автобусов
        let data = this.buses.sort((a, b) => a.plate.localeCompare(b.plate));

        for (const b of data) {
            yield b;
        }
    }

    // генератор для прохождения по всем автобусам упорядоченым по номерам маршрутов
    * generatorBusOrderByRoute() {
        // упорядочивание коллекции по номерам автобусов
        let data = this.buses.sort((a, b) => Utils.compareToRoute(a.routeNumber, b.routeNumber));

        for (const b of data) {
            yield b;
        }
    }

    // генератор для прохождения по автобусам в парке
    * generatorBusFleet() {
        // упорядочивание коллекции по номерам автобусов
        let data = Array.from(this._busFleet.values())
            .sort((a, b) => Utils.compareToRoute(a.routeNumber, b.routeNumber));

        for (const b of data) {
            yield b;
        }
    }

    // генератор для прохождения по автобусам на маршруте
    * generatorBusRoute() {
        // упорядочивание коллекции по номерам автобусов
        let data = Array.from(this._busRoute.values())
            .sort((a, b) => Utils.compareToRoute(a.routeNumber, b.routeNumber));

        for (const b of data) {
            yield b;
        }
    }
}
