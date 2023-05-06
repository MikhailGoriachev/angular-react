// Задача 1. Описать класс Student, содержащий поля:
// •	фамилия и инициалы;
// •	пол студента;
// •	фотография студента (заранее подготовленные файлы, с именами man001, woman001 и т.д. Имя файла генерируется в зависимости от пола студента);
// •	название группы;
// •	успеваемость (массив из пяти элементов типа Mark)
// •	Mark – класс: название предмета, оценка
// Реализуйте действия с коллекцией объектов класса Student, сохранять коллекцию в локальном хранилище:
// •	заполнение данными (сгенерированными) массива из десяти элементов
// •	вывод массива студентов в исходном порядке
// •	удаление студента из коллекции
// •	добавление студента в коллекцию (генерировать данные студента)
// •	выделение студентов, имеющих хотя бы одну оценку 2
// •	выделение студентов, имеющих оценки 4 и 5
// •	выделение студентов заданной группы
// •	упорядочивание копии массива студентов по возрастанию среднего балла
// •	упорядочивание копии массива студентов по фамилиям и инициалам
// •	упорядочивание копии массива студентов по названию группы

import {Component, OnInit} from '@angular/core';
import {Utils} from "../../assets/Utils";
import {Student} from "../../models/task01/Student";
import {StudentData} from "../../models/task01/StudentData";

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

    // исходная коллекция
    studentList: Student[] = [];

    // отображаемая коллекция
    studentListView: Student[] = [];

    // предикат для выделения записи
    isSelect: (item: Student) => boolean = () => false;

    // утилиты
    Utils = Utils;

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
        this.studentListView = this.studentList = StudentData.data;
    }

    // сортировка
    sortBy(fieldName: string = "", compare: (a: Student, b: Student) => number) {

        this.studentListView.sort(compare);

        if (this.stateSort.fieldName !== fieldName || this.stateSort.isDesc) {
            this.studentListView.reverse();
            this.stateSort = {fieldName: fieldName, isDesc: false};
            return;
        }

        this.stateSort = {fieldName: fieldName, isDesc: true};
    }

    // упорядочивание копии массива студентов id
    sortById(): void {
        this.sortBy("id", (a, b) => a.id - b.id);
    }

    // упорядочивание копии массива студентов по возрастанию среднего балла
    sortByAvgMark(): void {
        this.sortBy("avgMark", (a, b) => a.avgMark - b.avgMark);
    }

    // упорядочивание копии массива студентов по фамилиям и инициалам
    sortByFullName(): void {
        this.sortBy("fullName", (a, b) => a.fullName.localeCompare(b.fullName));
    }

    // упорядочивание копии массива студентов по названию группы
    sortByGroup(): void {
        this.sortBy("fullName", (a, b) => a.group.localeCompare(b.group));
    }

    // добавление студента в коллекцию (генерировать данные студента)
    addItem() {
        let id = this.studentList.length > 0 ? Math.max(...this.studentList.map(s => s.id)) + 1 : 1;
        this.studentList.unshift(Student.generate(id));

        StudentData.data = this.studentList;
    }

    // удаление студента из коллекции
    removeItem(id: number) {
        this.studentList.splice(this.studentList.findIndex(s => s.id === id), 1);
        // this.studentListView = this.studentListView.splice(this.studentListView.findIndex(s => s.id === id), 1);
        StudentData.data = this.studentList;
    }

    // выборка (подсветка) элементов
    selectBy(predicate: (item: Student) => boolean): void {
        this.isSelect = predicate;

        clearTimeout(this._timer!);
        this._timer = setTimeout(() => this.isSelect = () => false, this._duration);
    }

    // выделение студентов, имеющих хотя бы одну оценку 2
    selectByMarkTwo() {
        this.selectBy(s => s.markList.some(m => m.mark === 2));
    }

    // выделение студентов, имеющих оценки 4 и 5
    selectByMarkFourAndFive() {

        // оценки 4 и 5
        let pred = (s: Student, v: number) => s.markList.some(m => m.mark === v);
        this.selectBy(s => pred(s,4) && pred(s,5));

        // оценки только 4 и 5
        // this.selectBy(s => s.markList.every(m => m.mark === 4 || m.mark === 5));
    }

    // выделение студентов заданной группы
    selectByGroupName(group: string) {
        this.selectBy(s => s.group === group);
    }
}
