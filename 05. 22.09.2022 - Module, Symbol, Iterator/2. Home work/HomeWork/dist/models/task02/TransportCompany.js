// Класс Транспортная компания
import { Bus } from "./Bus.js";
import { Utils } from "../../Utils.js";
import { BusState } from "./BusState.js";
export class TransportCompany {
    // конструктор
    constructor(busFleet = new Map(), busRoute = new Map()) {
        this._busFleet = busFleet;
        this._busRoute = busRoute;
    }
    // автобусы
    get buses() {
        return Array.from(this._busFleet.values()).concat(Array.from(this._busRoute.values()));
    }
    get busFleet() {
        return this._busFleet;
    }
    set busFleet(value) {
        this._busFleet = value;
    }
    get busRoute() {
        return this._busRoute;
    }
    set busRoute(value) {
        this._busRoute = value;
    }
    // инициализация
    init() {
        // функция инициализации
        let initFunc = () => new Map(([...Array(Utils.getInt(10, 20))]
            .map(() => new Bus()))
            .map(b => [b.plate, b]));
        // автобусы в парке
        this._busFleet = initFunc();
        // автобусы на маршруте
        this._busRoute = initFunc();
    }
    // перемещение автобуса
    gotoBus(busPlate, busState) {
        let swap = (a, b, plate) => {
            a.set(plate, b.get(plate));
            b.delete(plate);
        };
        // перемещение автобуса
        switch (busState) {
            case BusState.busFleet:
                swap(this._busRoute, this._busFleet, busPlate);
                break;
            case BusState.busRoute:
                swap(this._busFleet, this._busRoute, busPlate);
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
                return i < data.length ? { done: false, value: data[i++] } : { done: true, value: null };
            }
        };
    }
    // генератор для прохождения по всем автобусам упорядоченым по номерам автобусов
    *generatorBusOrderByPlate() {
        // упорядочивание коллекции по номерам автобусов
        let data = this.buses.sort((a, b) => a.plate.localeCompare(b.plate));
        for (const b of data) {
            yield b;
        }
    }
    // генератор для прохождения по всем автобусам упорядоченым по номерам маршрутов
    *generatorBusOrderByRoute() {
        // упорядочивание коллекции по номерам автобусов
        let data = this.buses.sort((a, b) => Utils.compareToRoute(a.routeNumber, b.routeNumber));
        for (const b of data) {
            yield b;
        }
    }
    // генератор для прохождения по автобусам в парке
    *generatorBusFleet() {
        // упорядочивание коллекции по номерам автобусов
        let data = Array.from(this._busFleet.values())
            .sort((a, b) => Utils.compareToRoute(a.routeNumber, b.routeNumber));
        for (const b of data) {
            yield b;
        }
    }
    // генератор для прохождения по автобусам на маршруте
    *generatorBusRoute() {
        // упорядочивание коллекции по номерам автобусов
        let data = Array.from(this._busRoute.values())
            .sort((a, b) => Utils.compareToRoute(a.routeNumber, b.routeNumber));
        for (const b of data) {
            yield b;
        }
    }
}
//# sourceMappingURL=TransportCompany.js.map