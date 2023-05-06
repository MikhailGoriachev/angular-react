// Класс Автобус
// государственный номер автобуса,
// водитель (объект класса Person из задачи 1),
// номер маршрута (учтите, что номер может быть вида «42а», «121в»)
import { Person } from "../Person.js";
import { Utils } from "../../Utils.js";
import { BusState } from "./BusState.js";
export class Bus {
    // конструктор
    constructor(plate = Utils.getPlate(), driver = new Person(), routeNumber = Utils.getRouteNumber()) {
        this._plate = plate;
        this._driver = driver;
        this._routeNumber = routeNumber;
    }
    get plate() {
        return this._plate;
    }
    set plate(value) {
        this._plate = value;
    }
    get driver() {
        return this._driver;
    }
    set driver(value) {
        this._driver = value;
    }
    get routeNumber() {
        return this._routeNumber;
    }
    set routeNumber(value) {
        this._routeNumber = value;
    }
    // вывод в строку таблицы
    toTableRow(n, isState) {
        let btn = "";
        if (typeof isState !== "undefined") {
            let state = isState(this.plate);
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
//# sourceMappingURL=Bus.js.map