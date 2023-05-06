import {EventEmitter, Injectable} from '@angular/core';
import {Ship} from "../../../models/Ships/Ship";
import {Utils} from "../../../assets/Utils";

@Injectable({
    providedIn: 'root'
})
export class ShipDataService {

    // ключ
    readonly key: string = "shipList";

    // данные
    private _data: Ship[] = this.loadData();

    get data(): Ship[] {
        return this._data;
    }

    set data(value: Ship[]) {
        this.saveData(value);
    }

    // получить копию данных
    get copyData(): Ship[] {
        return [...this.data];
    }

    // получить файлы изображения кораблей
    get files(): string[] {
        return [...new Set(this.data.map(s => s.imageFile))]
    }

    // событие изменения коллекции
    onDataChanges: EventEmitter<Ship[]> = new EventEmitter<Ship[]>();


    // конструктор
    constructor() {
    }


    // упорядочивание по id
    sortById(): Ship[] {
        return this.copyData.sort((a, b) => a.id - b.id);
    }

    // упорядоченной по возрастанию года изготовления
    sortByYear(): Ship[] {
        return this.copyData.sort((a, b) => a.year - b.year);
    }

    // упорядоченной по убыванию водоизмещения
    sortByDisplacement(): Ship[] {
        return this.copyData.sort((a, b) => a.displacement - b.displacement);
    }

    // упорядоченной по названиям кораблей
    sortByName(): Ship[] {
        return this.copyData.sort((a, b) => a.name.localeCompare(b.name));
    }

    // добавление студента записи
    addItem(): void {
        let id = this.data.length > 0 ? Math.max(...this.data.map(s => s.id)) + 1 : 1;

        let ship = Utils.getShip();
        ship.id = id;

        this.data.unshift(ship);
        this.saveData(this.data);

        // запуск события изменения коллекции
        this.onDataChanges.emit(this.data);
    }

    // удаление студента из коллекции
    removeItem(id: number): void {
        if (this.data.length === 0)
            return;

        this.data.splice(this.data.findIndex(s => s.id === id), 1);
        this.saveData(this.data);

        // запуск события изменения коллекции
        this.onDataChanges.emit(this.data);
    }


    // загрузка данных
    loadData() {
        let json = localStorage.getItem(this.key);

        if (json === null) {
            let id = 1;
            let ships = [...Utils.shipList];
            ships.forEach(s => s.id = id++)

            return this.data = ships;
        }

        return JSON.parse(json).map((s: Ship) => new Ship().assign(s));
    }

    // сохранение данных
    saveData(data: Ship[]) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
}
