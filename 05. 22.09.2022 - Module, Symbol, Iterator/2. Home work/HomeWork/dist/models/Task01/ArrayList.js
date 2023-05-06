import { Person } from "../Person.js";
import { Utils } from "../../Utils.js";
// Класс Массив
export class ArrayList {
    // конструктор
    constructor(data = []) {
        this._data = data;
    }
    // размер массива
    get lenght() {
        return this._data.length;
    }
    // инициализация массива
    init(n = 12) {
        let func = typeof this._data == "number" ? () => Utils.getInt(10, 100) : () => new Person();
        this._data = [...Array(n)].map(() => func());
    }
    // вывод массива в консоль
    showToConsole() {
        console.log("—————————————————————————————————————————");
        console.log("Элементы списка:");
        for (const item of this) {
            console.log(item);
        }
        console.log("—————————————————————————————————————————");
    }
    // определение количества локальных минимумов в массиве (элементов, меньших своих левого и правого соседа,
    // первый и последний элементы не могут быть локальными минимумами)
    localMin() {
        let data = typeof this._data == "number" ? this._data : this._data.map(p => p.salary);
        // локальный минимум
        let count = 0;
        for (let i = 1, cur; i < data.length - 1; i++) {
            cur = data[i];
            if (cur < data[i - 1] && cur < data[i + 1])
                count++;
        }
        return count;
    }
    // упорядочение массива
    orderByDesc() {
        let func = typeof this._data == "number"
            ? (a, b) => a - b
            : (a, b) => b.age - a.age;
        this._data = this._data.sort(func);
    }
    // удаление первого элемента массива
    shift() {
        return this._data.shift();
    }
    // добавление элемента в конец массива
    push(...items) {
        this._data.push(...items);
    }
    // итератор для перебора элементов массива
    [Symbol.iterator]() {
        let i = 0;
        let data = this._data;
        return {
            next() {
                return i < data.length ? { done: true, value: data[i++] } : { done: false, value: null };
            }
        };
    }
}
//# sourceMappingURL=ArrayList.js.map