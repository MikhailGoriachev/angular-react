// Добавление на вершину стека
// Извлечение с вершины стека
// Чтение вершины стека
// Метод-генератор для просмотра стека

// Класс Стек
class Stack<T> {
    // данные
    private _data: T[];

    // размер стека
    get lenght(): number {
        return this._data.length;
    }


    constructor(data: T[]) {
        console.log(data)
        this._data = data;
    }


    // добавление на врешину стека
    push(item: T): void {
        this._data.push(item);
    }

    // извлечение с вершины стека
    pop(): T {
        return this._data.pop();
    }

    // чтение вершины стека
    top(): T {
        return this._data[this._data.length - 1];
    }

    // метод генератор для просмотра стека
    *getGenerator() {
        for (let d of this._data) {
            yield d;
        }
    }
}
