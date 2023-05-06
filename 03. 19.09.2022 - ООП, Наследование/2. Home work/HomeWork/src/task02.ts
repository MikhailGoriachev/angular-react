// Задача 2. Создать абстрактный класс Vehicle (транспортное средство). На его основе реализовать классы Plane
// (самолет), Саr (автомобиль) и Ship (корабль).
// Классы должны иметь возможность задавать и получать координаты и параметры средств передвижения (цена, скорость,
// год выпуска) с помощью аксессоров.
// Для самолета должна быть определена высота, для самолета и корабля — количество пассажиров,
// для корабля — порт приписки.
// Значения атрибутов производных классов получать/задавать аксессорами.
// Массив транспортных средств: 2 самолета, 3 корабля, 5 автомобилей. Массив вывести на страницу после ее загрузки.
// Также ищем в массиве транспортных средств, выбираем и выводим на страницу по окончании ее загрузки:
// •	самое старое транспортное средство (может быть найдено больше 1 транспортного средства)
// •	самое быстрое транспортное средство (может быть найдено больше 1 транспортного средства)
// •	самое медленное транспортное средство (может быть найдено больше 1 транспортного средства)

class Task02 {

    // данные
    private _data: Vehicle[];

    get data(): Vehicle[] {
        return this._data;
    }

    set data(value: Vehicle[]) {
        this._data = value;
    }

    // элементы для вывода
    private _output: { data: JQuery, older: JQuery, slow: JQuery, fast: JQuery }

    get output(): { data: JQuery; older: JQuery; slow: JQuery; fast: JQuery } {
        return this._output;
    }

    set output(value: { data: JQuery; older: JQuery; slow: JQuery; fast: JQuery }) {
        this._output = value;
    }


    // конструктор
    constructor(output: { data: JQuery, older: JQuery, slow: JQuery, fast: JQuery }) {

        // загрузка данных
        this.init();

        this._output = output;
    }


    // инициализация данных
    init(): void {

        // 2 самолета, 3 корабля, 5 автомобилей
        this._data = [
            new Plane(Utils.getAircraftType(), Utils.getInt(70, 100) * 1e6, Utils.getInt(3, 5) * 100, 2000 + Utils.getInt(17, 20), new Coord(), Utils.getInt(100, 300), Utils.getInt(3_000, 5_000)),
            new Plane(Utils.getAircraftType(), Utils.getInt(70, 100) * 1e6, Utils.getInt(3, 5) * 100, 2000 + Utils.getInt(17, 20), new Coord(), Utils.getInt(100, 300), Utils.getInt(3_000, 5_000)),
            new Ship(Utils.getShipName(), Utils.getInt(300, 600) * 1e6, Utils.getInt(3, 5) * 10, 2000 + Utils.getInt(17, 20), new Coord(), Utils.getInt(100, 300), Utils.getPort()),
            new Ship(Utils.getShipName(), Utils.getInt(300, 600) * 1e6, Utils.getInt(3, 5) * 10, 2000 + Utils.getInt(17, 20), new Coord(), Utils.getInt(100, 300), Utils.getPort()),
            new Ship(Utils.getShipName(), Utils.getInt(300, 600) * 1e6, Utils.getInt(3, 5) * 10, 2000 + Utils.getInt(17, 20), new Coord(), Utils.getInt(100, 300), Utils.getPort()),
            new Car(Utils.getCarName(), Utils.getInt(20, 40) * 1e3, Utils.getInt(5, 7) * 10, 2000 + Utils.getInt(17, 20), new Coord()),
            new Car(Utils.getCarName(), Utils.getInt(20, 40) * 1e3, Utils.getInt(5, 7) * 10, 2000 + Utils.getInt(17, 20), new Coord()),
            new Car(Utils.getCarName(), Utils.getInt(20, 40) * 1e3, Utils.getInt(5, 7) * 10, 2000 + Utils.getInt(17, 20), new Coord()),
            new Car(Utils.getCarName(), Utils.getInt(20, 40) * 1e3, Utils.getInt(5, 7) * 10, 2000 + Utils.getInt(17, 20), new Coord()),
            new Car(Utils.getCarName(), Utils.getInt(20, 40) * 1e3, Utils.getInt(5, 7) * 10, 2000 + Utils.getInt(17, 20), new Coord()),
        ]
    }

    // вывод данных в таблицу
    show(array: Vehicle[] = this._data, title: string = "Транспортные средства", container: JQuery = this._output.data): void {
        let n = 1;

        console.log(title);
        console.log(container);
        console.log(array);

        container.html(
        `<h4 class="text-center">${title}</h4>

        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th>&#8470;</th>
                <th>Название</th>
                <th>Цена ($)</th>
                <th>Скорость (км/ч)</th>
                <th>Год выпуска</th>
                <th>Координаты</th>
                <th>Количество пассажиров</th>
                <th>Порт</th>
                <th>Высота (м)</th>
            </tr>
            </thead>

            <tbody>
                ${array.reduce((p, c) => { return p + c.toTableRow(n++);}, "")}
            </tbody>
        </table>`);
    }

    // самые старые транспортные средства
    olderList(): Vehicle[] {
        let year = Math.min(...this.data.map(i => i.yearOfCreation));
        return this._data.filter(i => i.yearOfCreation === year);
    }

    // самые быстрые транспортные средства
    fastList(): Vehicle[] {
        let speed = Math.max(...this.data.map(i => i.speed));
        return this._data.filter(i => i.speed === speed);
    }

    // самые старые транспортные средства
    slowList(): Vehicle[] {
        let speed = Math.min(...this.data.map(i => i.speed));
        return this._data.filter(i => i.speed === speed);
    }

    // вывод самых страых транспортных средств
    showOlderList(): void {
        this.show(this.olderList(), "Самые старые транспортные средства", this._output.older);
    }

    // вывод самых быстрых транспортных средств
    showFastList(): void {
        this.show(this.fastList(), "Самые быстрые транспортные средства", this._output.fast);
    }

    // вывод самых медленных транспортных средств
    showSlowList(): void {
        this.show(this.slowList(), "Самые медленные транспортные средства", this._output.slow);
    }
}


// инициализация страницы
$(() => {
    let task = new Task02({
        data: $("#dataId"),
        older: $("#olderId"),
        fast: $("#fastId"),
        slow: $("#slowId")
    });

    // вывод начальных данных
    task.show();

    // вывод самых страых транспортных средств
    task.showOlderList();

    // вывод самых быстрых транспортных средств
    task.showFastList();

    // вывод самых медленных транспортных средств
    task.showSlowList();
})
