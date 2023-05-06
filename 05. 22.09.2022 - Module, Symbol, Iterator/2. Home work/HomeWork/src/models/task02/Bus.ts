// Класс Автобус
// государственный номер автобуса,
// водитель (объект класса Person из задачи 1),
// номер маршрута (учтите, что номер может быть вида «42а», «121в»)

import {Person} from "../Person.js";
import {Utils} from "../../Utils.js";
import {BusState} from "./BusState.js";

export class Bus {

    // госномер
    private _plate: string;

    get plate(): string {
        return this._plate;
    }

    set plate(value: string) {
        this._plate = value;
    }

    // водитель
    private _driver: Person;

    get driver(): Person {
        return this._driver;
    }

    set driver(value: Person) {
        this._driver = value;
    }

    // номер маршрута
    private _routeNumber: string;

    get routeNumber(): string {
        return this._routeNumber;
    }

    set routeNumber(value: string) {
        this._routeNumber = value;
    }


    // конструктор
    constructor(plate: string = Utils.getPlate(), driver: Person = new Person(), routeNumber: string = Utils.getRouteNumber()) {
        this._plate = plate;
        this._driver = driver;
        this._routeNumber = routeNumber;
    }


    // вывод в строку таблицы
    toTableRow(n: number, isState?: (plate: string) => BusState): string {

        let btn = "";

        if (typeof isState !== "undefined") {
            let state: BusState = isState(this.plate);

            btn = `
            <button class="btn btn-outline-${state === BusState.busFleet ? "success" : "primary"}" data-plate="${this.plate}" data-state="${state}"
                    title="${state === BusState.busFleet ? "Отправить на маршрут" : "Отправить в парк"}">
                <i class="bi ${state === BusState.busFleet ? "bi-arrow-right-square-fill" : "bi-house-fill"}" 
                    data-plate="${this.plate}"
                    data-state="${state}"></i>
            </button>`;
        }

        return `
            <tr>
                <td>${n}</td>
                <td>${this._routeNumber}</td>
                <td>${this._driver.fullName}</td>
                <td>${this._plate}</td>  
                <td>
                    ${btn}
                </td>  
            </tr>`;
    }
}
