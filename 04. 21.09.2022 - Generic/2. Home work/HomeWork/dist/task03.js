// Задача 3. Создать интерфейсы и классов по следующему заданию:
// •	Интерфейс ПлоскаяФигура с методами для вычисления площади и периметра, вывода в разметку и свойством
//      для хранения изображения фигуры
// •	Класс Фигура – базовый класс иерархии.
// •	Треугольник, наследует от Фигура, реализует интерфейс ПлоскаяФигура
// •	Прямоугольник, наследует от Фигура, реализует интерфейс ПлоскаяФигура
// •	Окружность, наследует от Фигура, реализует интерфейс ПлоскаяФигура
// Реализовать по три объекта каждого типа в массиве объектов c интерфейсом ПлоскаяФигура. Для массива выполнить:
// •	Упорядочить массив по убыванию площади
// •	Упорядочить массив по возрастанию площади
// •	Выбрать фигуры с минимальной площадью
// •	Выбрать фигуры с максимальной площадью
class Task03 {
    // конструктор
    constructor(output) {
        this._output = output;
        this.init();
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get output() {
        return this._output;
    }
    set output(value) {
        this._output = value;
    }
    // инициализация данных
    init() {
        this._data = [
            new Circle(Utils.getDouble(5, 10)),
            new Circle(Utils.getDouble(5, 10)),
            new Circle(Utils.getDouble(5, 10)),
            new Rectangle(Utils.getDouble(5, 10), Utils.getDouble(5, 10)),
            new Rectangle(Utils.getDouble(5, 10), Utils.getDouble(5, 10)),
            new Rectangle(Utils.getDouble(5, 10), Utils.getDouble(5, 10)),
            new Triangle({ a: Utils.getDouble(20, 15), b: Utils.getDouble(20, 15), c: Utils.getDouble(20, 15) }),
            new Triangle({ a: Utils.getDouble(20, 15), b: Utils.getDouble(20, 15), c: Utils.getDouble(20, 15) }),
            new Triangle({ a: Utils.getDouble(20, 15), b: Utils.getDouble(20, 15), c: Utils.getDouble(20, 15) }),
        ].sort(i => Math.random());
    }
    // вывод данных в таблицу
    show(array = this._data, title = "Фигуры") {
        this._output.title.html(title);
        let n = 1;
        this._output.tbody.html(array.reduce((p, c) => p + c.toTableRow(n++), ""));
    }
    // упорядочить массив по убыванию площади
    sortByAreaDesc() {
        this._data = this._data.sort((a, b) => b.area() - a.area());
    }
    // упорядочить массив по возрастанию площади
    sortByAreaAsc() {
        this._data = this._data.sort((a, b) => a.area() - b.area());
    }
    // выбрать фигуры с минимальной площадью
    selectByMinArea() {
        let min = Math.min(...this._data.map(i => i.area()));
        return this._data.filter(i => Math.abs(i.area() - min) < 1e-5);
    }
    // выбрать фигуры с максимальной площадью
    selectByMaxArea() {
        let max = Math.max(...this._data.map(i => i.area()));
        return this._data.filter(i => Math.abs(i.area() - max) < 1e-5);
    }
}
// инициализация страницы
$(() => {
    let task = new Task03({
        title: $("#titleId"),
        tbody: $("#tbodyId")
    });
    // вывод начальных данных
    task.show();
    // все записи
    $("#dataAllId").on("click", () => {
        task.show();
    });
    // генерация новых данных
    $("#initId").on("click", () => {
        task.init();
        task.show();
    });
    // упорядочить массив по убыванию площади
    $("#sortByAreaDesc").on("click", () => {
        task.sortByAreaDesc();
        task.show(task.data, "Сортировка по убыванию площади");
    });
    // упорядочить массив по возрастанию площади
    $("#sortByAreaAsc").on("click", () => {
        task.sortByAreaAsc();
        task.show(task.data, "Сортировка по возрастанию площади");
    });
    // выбрать фигуры с минимальной площадью
    $("#selectByMinArea").on("click", () => {
        task.show(task.selectByMinArea(), "Фигуры с минимальной площадью");
    });
    // выбрать фигуры с максимальной площадью
    $("#selectByMaxArea").on("click", () => {
        task.show(task.selectByMaxArea(), "Фигуры с максимальной площадью");
    });
});
//# sourceMappingURL=task03.js.map