// Задача 1. Требуется хранить в коллекции и выводить сведения о планетах Солнечной системы – название, среднее
// расстояние до Солнца, радиус, масса, изображение, количество известных спутников, группа (газовый гигант,
// ледяной гигант, земной тип).
// По командам (кликам по кнопкам) запускайте обработчики:
// •	Вывод исходной коллекции сведений о планетах
// •	Упорядочивание копии коллекции по среднему расстоянию до Солнца
// •	Упорядочивание копии коллекции по категориям (порядок указан выше)
// •	Упорядочивание копии коллекции по количеству известных спутников
// •	Выборка планет по заданной группе – группу выбирайте радиокнопками, выбранную группу выделяйте стилями
// •	Выборка планет по количеству известных спутников (нет, 1 или 2 спутника, более 2х спутников), критерий
//      выборки также задавайте радиокнопками

import {Component, OnInit} from '@angular/core';
import {Planet} from "../../models/Planet";

@Component({
    selector: 'app-task01',
    templateUrl: './task01.component.html',
    styleUrls: ['./task01.component.css']
})
export class Task01Component implements OnInit {

    // планеты
    private _planetList: Planet[] = [];

    get planetList(): Planet[] {
        return this._planetList;
    }

    set planetList(value: Planet[]) {
        this._planetList = value;
    }

    // отображаемая коллекция
    private _planetsView: Planet[] = [];

    get planetsView(): Planet[] {
        return this._planetsView;
    }

    set planetsView(value: Planet[]) {
        this._planetsView = value;
    }

    // предикат для выделения записи
    private _isSelect: (planet: Planet) => boolean = () => false;

    get isSelect(): (planet: Planet) => boolean {
        return this._isSelect;
    }

    set isSelect(value: (planet: Planet) => boolean) {
        this._isSelect = value;
    }

    // конструктор
    constructor() {
    }


    // обработчик события инициализация компонента
    ngOnInit(): void {

        this._planetsView = this._planetList = [
            new Planet("Меркурий", 0.39, 3.304e23, "mercury.png", 0, "земной тип"),
            new Planet("Венера", 0.72, 4.872e24, "venera.jpg", 0, "земной тип"),
            new Planet("Земля", 1, 5.978e24, "earth.jpg", 1, "земной тип"),
            new Planet("Марс", 1.52, 6.423e24, "mars.jpg", 2, "земной тип"),
            new Planet("Юпитер", 5.2, 1.900e23, "upiter.jpg", 16, "газовый гигант"),
            new Planet("Сатурн", 9.54, 5.689e26, "saturn.png", 30, "газовый гигант"),
            new Planet("Уран", 19.19, 8.72e25, "uran.jpg", 15, "ледяной гигант"),
            new Planet("Нептун", 30.07, 1.03e26, "neptun.jpg", 6, "ледяной гигант")
        ];
    }

    // вывод исходной коллекции
    showDefault(): void {
        this._planetsView = this._planetList;
    }

    // упорядочивание копии коллекции по среднему расстоянию до Солнца
    showOrderByAvgDistance(): void {
        this._planetsView = this._planetList.slice().sort((a, b) => b.avgDistance - a.avgDistance);
    }

    // упорядочивание копии коллекции по категориям (порядок указан выше)
    showOrderByGroup(): void {
        let group = new Map<string, number>([
            ["ледяной гигант", 1],
            ["газовый гигант", 2],
            ["земной тип", 3],
        ]);

        this._planetsView = this._planetList.slice().sort((a, b) => group.get(a.group)! - group.get(b.group)!);
    }

    // упорядочивание копии коллекции по количеству известных спутников
    showOrderByAmountSatellites(): void {
        this._planetsView = this._planetList.slice().sort((a, b) => b.amountSatellites - a.amountSatellites);
    }

    // установка группы для выборки
    setGroupWithSelection(group: string): void {
        this._isSelect = (p) => group === p.group;
    }

    // выборка планет по количеству известных спутников (нет, 1 или 2 спутника, более 2х спутников), критерий выборки также задавайте радиокнопками
    setAmountSatellitesWithSelection(value: string): void {
        switch (value) {
            case "все":
                this._isSelect = () => false;
                break;
            case "нет":
                this._isSelect = (p) => p.amountSatellites === 0;
                break;
            case "1 или 2":
                this._isSelect = (p) => p.amountSatellites === 1 || p.amountSatellites === 2;
                break;
            case "более 2х":
                this._isSelect = (p) => p.amountSatellites > 2;
                break;
        }
    }
}
