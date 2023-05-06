import {Person} from "../Person.js";

// Класс Очередь
export class Queue<T extends number | Person> {

    // данные
    private _data: T[];

    // функция инициализации
    private readonly _initFunc: () => T;

    // функция для сортировки
    private readonly _compareTo: (a: T, b: T) => number;

    // размер массива
    get lenght() {
        return this._data.length;
    }


    // конструктор
    constructor(init: () => T, compareTo: (a: T, b: T) => number, data: T[] = []) {
        this._initFunc = init;
        this._compareTo = compareTo;
        this._data = data;
    }


    // инициализация массива
    init(n: number = 12): void {
        this._data = [...Array(n)].map(() => this._initFunc());
    }

    // вывод массива в консоль
    showToConsole(): void {
        console.log("\nЭлементы списка:\n—————————————————————————————————————————");
        for (const item of this) {
            console.log(item);
        }
        console.log("—————————————————————————————————————————\n\n");
    }

    // определение количества локальных минимумов в массиве (элементов, меньших своих левого и правого соседа,
    // первый и последний элементы не могут быть локальными минимумами)
    localCountMin(): number {

        if (this._data.length === 0)
            return 0;

        // количесто
        let count = 0;

        // поиск
        for (let i = 1, cur: T; i < this._data.length - 1; i++) {
            cur = this._data[i];

            // если локальный минимум
            if (cur < this._data[i - 1] && cur < this._data[i + 1]) {
                count++;
            }
        }

        return count;
    }

    // упорядочение массива
    orderBy(): void {
        if (this._data.length === 0)
            return;

        this._data = this._data.sort(this._compareTo);
    }

    // удаление первого элемента массива
    shift(): T {
        return this._data.shift();
    }

    // добавление элемента в конец массива
    push(...items: T[]): void {
        this._data.push(...items);
    }

    // итератор для перебора элементов массива
    [Symbol.iterator]() {
        let i = 0;
        let data = this._data;

        return {
            next() {
                return i < data.length ? {done: false, value: data[i++]} : {done: true, value: null};
            }
        }
    }
}
