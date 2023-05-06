// Класс Очередь
export class Queue {
    // конструктор
    constructor(init, compareTo, data = []) {
        this._initFunc = init;
        this._compareTo = compareTo;
        this._data = data;
    }
    // размер массива
    get lenght() {
        return this._data.length;
    }
    // инициализация массива
    init(n = 12) {
        this._data = [...Array(n)].map(() => this._initFunc());
    }
    // вывод массива в консоль
    showToConsole() {
        console.log("\nЭлементы списка:\n—————————————————————————————————————————");
        for (const item of this) {
            console.log(item);
        }
        console.log("—————————————————————————————————————————\n\n");
    }
    // определение количества локальных минимумов в массиве (элементов, меньших своих левого и правого соседа,
    // первый и последний элементы не могут быть локальными минимумами)
    localCountMin() {
        if (this._data.length === 0)
            return 0;
        // количесто
        let count = 0;
        // поиск
        for (let i = 1, cur; i < this._data.length - 1; i++) {
            cur = this._data[i];
            // если локальный минимум
            if (cur < this._data[i - 1] && cur < this._data[i + 1]) {
                count++;
            }
        }
        return count;
    }
    // упорядочение массива
    orderBy() {
        if (this._data.length === 0)
            return;
        this._data = this._data.sort(this._compareTo);
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
                return i < data.length ? { done: false, value: data[i++] } : { done: true, value: null };
            }
        };
    }
}
//# sourceMappingURL=Queue.js.map