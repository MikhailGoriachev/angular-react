// Задача 1. Создать массив объектов класса Worker. В массиве должно быть не менее
// 10 экземпляров. В объекте Worker должны быть следующие поля:
//     • идентификатор работника
//     • фамилия и инициалы работника;
//     • название занимаемой должности;
//     • пол (мужской или женский, другие варианты не требуются);
//     • год поступления на работу;
//     • имя файла с фотографией работника (графические файлы, рекомендуемые
// имена файлов: man_001.jpg, woman_001.jpg, подготовьте файлы заранее,
//     добавлять файлы в приложении не надо);
//     • величина оклада работника;
//     • метод вычисления стажа работника для текущей даты.
//     Выполнить для массива работников (объектов Worker) при помощи кликов по экранным
// кнопкам и/или по выбранным клавишам следующие обработки (после 15 секунд выводить
// массив в исходном состоянии):
// • вывод массива с упорядочиванием фамилий по алфавиту;
//     • вывод массива с упорядочиванием по убыванию кладов;
//     • вывод массива с выделением работников с окладами, равными минимальному
//     • вывод массива с выделением работников с окладами, равными максимальному,
//     • вывод массива с выделением работников с превышением заданного в строке
//       ввода стажа работы
//     • вывод массива с выделением работников с заданной должностью
//     • вывод массива с выделением работников с заданным годом поступления на работу,


import {Component, OnInit} from '@angular/core';
import {SelectType} from 'src/models/SelectType';
import {Worker} from "../../models/Worker";
import {WorkerData} from "../../models/WorkerData";
import {Utils} from "../../assets/Utils";

@Component({
    selector: 'app-task01',
    templateUrl: './task01.component.html',
    styleUrls: ['./task01.component.css']
})
export class Task01Component implements OnInit {

    // таймер
    private _timer: NodeJS.Timeout | null = null;

    // длительность выделения
    private _duration: number = 10_000;

    // работники
    workerList: Worker[] = [];

    // отображаемая коллекция
    workerListView: Worker[] = [];

    // перечисление выборок
    SelectType = SelectType;

    // тип выборки
    selectType: SelectType = SelectType.position;

    // предикат для выделения записи
    isSelect: (worker: Worker) => boolean = () => false;

    // утилиты
    Utils = Utils;

    // конструктор
    constructor() {
    }


    // обработчик события инициализация компонента
    ngOnInit(): void {
        this.workerListView = this.workerList = WorkerData.data;
    }

    // вывод исходной коллекции
    sortByDefault(): void {
        this.workerListView = this.workerList;
    }

    // упорядочивание копии коллекции по фамилий по алфавиту
    sortByFullName(): void {
        this.workerListView = this.workerList.slice().sort((a, b) => a.fullName.localeCompare(b.fullName));
    }

    // упорядочивание копии коллекции по убыванию окладов
    sortBySalaryDesc(): void {
        this.workerListView = this.workerList.slice().sort((a, b) => b.salary - a.salary);
    }

    // выборка (подсветка) элементов
    selectBy(predicate: (worker: Worker) => boolean): void {
        this.isSelect = predicate;

        clearTimeout(this._timer!);
        this._timer = setTimeout(() => this.isSelect = () => false, this._duration);
    }

    // выборка по минимальному окладу
    selectByMinSalary() {
        let salary = Math.min(...this.workerList.map(w => w.salary));
        this.selectBy((w) => w.salary === salary);
    }

    // выборка по максимальному окладу
    selectByMaxSalary() {
        let salary = Math.max(...this.workerList.map(w => w.salary));
        this.selectBy((w) => w.salary === salary);
    }

    // выборка выше заданного стажа
    selectByOverExperience(experience: number) {
        this.selectBy((w) => w.getExperience() >= experience);
    }

    // выборка по должности
    selectByPosition(position: string) {
        this.selectBy((w) => w.position === position);
    }

    // выборка по году поступления на работу
    selectByYearOfEmployment(year: number) {
        this.selectBy((w) => w.yearOfEmployment === year);
    }
}
