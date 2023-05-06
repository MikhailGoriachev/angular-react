import {IComparator} from "../interfaces/IComparator";

// Класс Очередь
export class Queue<T extends IComparator<T>> {

    // данные
    private _data: T[];

    // размер массива
    get lenght() {
        return this._data.length;
    }

    // функция для генерации элемента массива
    private readonly _generate: () => T;

    // конструктор
    constructor(generate: () => T, data: T[] = []) {
        this._generate = generate;
        this._data = data;
    }


    // инициализация массива
    init(n: number = 12): void {
        this._data = [...Array<T>(n)].map((i) => this._generate());
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

        // количество
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

        this._data = this._data.sort((a, b) => a.compareTo(b));
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
