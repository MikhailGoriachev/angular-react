// Добавление на вершину стека
// Извлечение с вершины стека
// Чтение вершины стека
// Метод-генератор для просмотра стека
// Класс Стек
class Stack {
    // размер стека
    get lenght() {
        return this._data.length;
    }
    // добавление на врешину стека
    push(item) {
        this._data.push(item);
    }
    // извлечение с вершины стека
    pop() {
        return this._data.pop();
    }
    // чтение вершины стека
    top() {
        return this._data[this._data.length];
    }
    // метод генератор для просмотра стека
    *getGenerator() {
        for (let d of this._data) {
            yield d;
        }
    }
}
//# sourceMappingURL=Stack.js.map