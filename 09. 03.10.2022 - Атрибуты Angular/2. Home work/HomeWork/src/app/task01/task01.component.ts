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
import {Utils} from 'src/assets/Utils';
import {Drink} from "../../models/Drink";
import {DrinkData} from "../../models/DrinkData";
import {SelectType} from "../../models/SelectType";

@Component({
    selector: 'app-task01',
    templateUrl: './task01.component.html',
    styleUrls: ['./task01.component.css']
})
export class Task01Component implements OnInit {

    // перечисление типов выборки (для доступа в разметке)
    SelectType = SelectType;

    // таймер
    private _timer: NodeJS.Timeout | null = null;

    // длительность выделения
    private _duration: number = 10_000;

    // напитки
    private _drinkList: Drink[] = [];

    get drinkList(): Drink[] {
        return this._drinkList;
    }

    set drinkList(value: Drink[]) {
        this._drinkList = value;
    }

    // отображаемая коллекция
    private _drinkViewList: Drink[] = []

    get drinkViewList(): Drink[] {
        return this._drinkViewList;
    }

    set drinkViewList(value: Drink[]) {
        this._drinkViewList = value;
    }

    // топперы
    get topperList(): string[] {
        return Utils.topperList;
    }

    // тип выборки
    selectType: SelectType = SelectType.topper;

    // предикат для выделения записи
    private _isSelect: (drink: Drink) => boolean = () => false;

    get isSelect(): (drink: Drink) => boolean {
        return this._isSelect;
    }

    set isSelect(value: (drink: Drink) => boolean) {
        this._isSelect = value;
    }


    // конструктор
    constructor() {
    }


    // обработчик события инициализация компонента
    ngOnInit(): void {
        this._drinkViewList = this._drinkList = DrinkData.data;
    }

    // вывод исходной коллекции
    sortByDefault(): void {
        this._drinkViewList = this._drinkList;
    }

    // упорядочивание копии коллекции по наименованию напитка
    sortByName(): void {
        this._drinkViewList = this._drinkList.slice().sort((a, b) => a.name.localeCompare(b.name));
    }

    // упорядочивание копии коллекции по виду топпера
    sortByTopper(): void {
        this._drinkViewList = this._drinkList.slice().sort((a, b) => a.topper.localeCompare(b.topper));
    }

    // упорядочивание копии коллекции по убыванию цены напитка
    sortByPriceDesc(): void {
        this._drinkViewList = this._drinkList.slice().sort((a, b) => b.price - a.price);
    }

    // выборка напитков по топперу, выбранную группу выделяйте CSS-классом/CSS-классами, выделение снимайте через 10 с после выделения
    selectByTopper(topper: string): void {
        this._isSelect = (d: Drink) => d.topper === topper;

        clearTimeout(this._timer!);
        this._timer = setTimeout(() => this._isSelect = () => false, this._duration);
    }

    // выборка напитков по диапазону цены, выбранную группу выделяйте CSS-классом/CSS-классами, выделение снимайте через 10 с после выделения
    selectByPriceRange(min: number, max: number): void {
        this._isSelect = (d: Drink) => d.price >= min && d.price <= max;

        clearTimeout(this._timer!);
        this._timer = setTimeout(() => this._isSelect = () => false, this._duration);
    }

    // выбор напитков, которые могут быть поданы «на вынос», выбранную группу выделяйте CSS-классом/CSS-классами, выделение снимайте через 10 с после выделения
    selectByIsDrinkToGo(isGoto: boolean): void {
        this._isSelect = (d: Drink) => d.isDrinkToGo === isGoto;

        clearTimeout(this._timer!);
        this._timer = setTimeout(() => this._isSelect = () => false, this._duration);
    }
}
