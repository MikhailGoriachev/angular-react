import {Ship} from "./Ship";
import {Utils} from "../../assets/Utils";

// Класс для доступа к данным о кораблях
export class ShipData {

    // ключ
    static readonly key: string = "shipList";

    // данные
    static get data(): Ship[] {
        let json = localStorage.getItem(ShipData.key);

        if (json === null) {
            let id = 1;
            let ships = [...Utils.shipList];
            ships.forEach(s => s.id = id++)
            return this.data = ships;
        }

        // return JSON.parse(json).map((s: Ship) => Object.assign(new Ship, s));
        return JSON.parse(json).map((s: Ship) => new Ship().assign(s));
    }

    static set data(value: Ship[]) {
        localStorage.setItem(ShipData.key, JSON.stringify(value));
    }
}
