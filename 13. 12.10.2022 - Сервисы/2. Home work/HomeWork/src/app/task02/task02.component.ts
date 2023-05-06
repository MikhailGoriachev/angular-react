import {Component, OnInit} from '@angular/core';
import {Ship} from "../../models/Ships/Ship";
import {ShipDataService} from "../services/shipDataService/ship-data.service";

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
    constructor(private _service: ShipDataService) {
    }


    // обработчик события инициализация компонента
    ngOnInit(): void {
        this.shipListView = this._service.copyData;

        // подписка на событие
        this._service.onDataChanges.subscribe((s) => this.shipListView = s);
    }

    // сортировка
    sortBy(fieldName: string = "", sort: () => Ship[]) {

        // сортировка
        this.shipListView = sort();

        if (this.stateSort.fieldName !== fieldName || this.stateSort.isDesc) {
            this.shipListView.reverse();
            this.stateSort = {fieldName: fieldName, isDesc: false};
            return;
        }

        this.stateSort = {fieldName: fieldName, isDesc: true};
    }

    // упорядочивание по id
    sortById(): void {
        this.sortBy("id", () => this._service.sortById());
    }

    // упорядоченной по возрастанию года изготовления
    sortByYear(): void {
        this.sortBy("year", () => this._service.sortByYear());
    }

    // упорядоченной по убыванию водоизмещения
    sortByDisplacement(): void {
        this.sortBy("displacement", () => this._service.sortByDisplacement());
    }

    // упорядоченной по названиям кораблей
    sortByName(): void {
        this.sortBy("name", () => this._service.sortByName());
    }

    // добавление студента записи
    addItem(): void {
        this._service.addItem();
    }

    // удаление студента из коллекции
    removeItem(id: number): void {
        this._service.removeItem(id);
    }
}
