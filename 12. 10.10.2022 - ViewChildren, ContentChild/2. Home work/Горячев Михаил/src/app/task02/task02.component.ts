import {Component, OnInit} from '@angular/core';
import {Ship} from "../../models/Ships/Ship";
import {Utils} from "../../assets/Utils";
import {ShipData} from "../../models/Ships/ShipData";

@Component({
    selector: 'app-task02',
    templateUrl: './task02.component.html'
})
export class Task02Component implements OnInit {

    // исходная коллекция
    shipList: Ship[] = [];

    // отображаемая коллекция
    shipListView: Ship[] = [];

    // состояние сортировки
    stateSort = {
        isDesc: false,
        fieldName: ""
    };


    // конструктор
    constructor() {
    }


    // обработчик события инициализация компонента
    ngOnInit(): void {
        this.shipListView = this.shipList = ShipData.data;
    }

    // сортировка
    sortBy(fieldName: string = "", compare: (a: Ship, b: Ship) => number) {

        this.shipListView.sort(compare);

        if (this.stateSort.fieldName !== fieldName || this.stateSort.isDesc) {
            this.shipListView.reverse();
            this.stateSort = {fieldName: fieldName, isDesc: false};
            return;
        }

        this.stateSort = {fieldName: fieldName, isDesc: true};
    }

    // упорядочивание по id
    sortById(): void {
        this.sortBy("id", (a, b) => a.id - b.id);
    }

    // упорядоченной по возрастанию года изготовления
    sortByYear(): void {
        this.sortBy("year", (a, b) => a.year - b.year);
    }

    // упорядоченной по убыванию водоизмещения
    sortByDisplacement(): void {
        this.sortBy("displacement", (a, b) => a.displacement - b.displacement);
    }

    // упорядоченной по названиям кораблей
    sortByName(): void {
        this.sortBy("name", (a, b) => a.name.localeCompare(b.name));
    }

    // добавление студента записи
    addItem(): void {
        let id = this.shipList.length > 0 ? Math.max(...this.shipList.map(s => s.id)) + 1 : 1;

        let ship = Utils.getShip();
        ship.id = id;

        this.shipList.unshift(ship);

        ShipData.data = this.shipList;
    }

    // удаление студента из коллекции
    removeItem(id: number): void {
        if (this.shipList.length === 0)
            return;

        this.shipList.splice(this.shipList.findIndex(s => s.id === id), 1);

        console.log(this.shipList);

        ShipData.data = this.shipList;
    }
}
