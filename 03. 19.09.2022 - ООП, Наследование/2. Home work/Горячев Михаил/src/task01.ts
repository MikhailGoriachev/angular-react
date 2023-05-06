// Задача 1. Разработайте приложение TypeScript с выводом обработанных данных на страницу HTML по заданию.
// Описать класс с именем Aeroflot, содержащий следующие поля:
// •	название пункта назначения;
// •	номер рейса;
// •	тип самолета.
// Выполнить следующие действия по загрузке страницы:
// •	инициализация массива из семи объектов класса Aeroflot (записи должны быть упорядочены по возрастанию
//      номера рейса);
// •	вывод на страницу номеров рейсов и типов самолетов, вылетающих в пункт назначения, название которого совпало с
//      названием, выбранным из массива названий пунктов назначений при помощи генератора случайных чисел (если таких
//      рейсов нет, вывести соответствующее сообщение)
// •	вывод на страницу номеров рейсов и названий пунктов назначения для типа самолета, выбранного из массива типов
//      при помощи генератора случайных чисел.

class Task01 {

    // данные
    private _data: Aeroflot[];

    get data(): Aeroflot[] {
        return this._data;
    }

    set data(value: Aeroflot[]) {
        this._data = value;
    }


    // элементы для вывода
    private _output: { tbody: JQuery, title: JQuery, message: JQuery }

    get output(): { tbody: JQuery, title: JQuery, message: JQuery } {
        return this._output;
    }

    set output(value: { tbody: JQuery, title: JQuery, message: JQuery }) {
        this._output = value;
    }


    // конструктор
    constructor(output: { tbody: JQuery, title: JQuery, message: JQuery }) {

        // загрузка данных
        if (!this.load()) {
            this.init();
            this.save();
        }

        this._output = output;
    }


    // загрузить данные из локального хранилища
    load(): boolean {
        if (typeof localStorage.aeroflotList !== "undefined") {
            this._data = (JSON.parse(localStorage.aeroflotList) as Aeroflot[])
                .map(i => new Aeroflot().assign(i));
            return true;
        }

        return false;
    }

    // сохранить данные в локальное хранилище
    save(): void {
        localStorage.aeroflotList = JSON.stringify(this._data);
    }

    // инициализация данных
    init(n: number = 7): void {
        this._data = [...Array(n)].map(() => new Aeroflot(
            Utils.getDestination(),
            Utils.getFlightNumber(),
            Utils.getAircraftType())
        ).sort((a, b) => b.flightNumber.localeCompare(a.flightNumber));
    }

    // вывод данных в таблицу
    show(array: Aeroflot[] = this._data, title: string = "Рейсы"): void {

        this._output.title.html(title);

        this._output.message.hide();

        let n = 1;
        this._output.tbody.html(
            array.reduce((p, c) => p + c.toTableRow(n++), "")
        );
    }

    // выборка по пункту назначения
    selectByDestination(dest: string): Aeroflot[] {
        return this._data.filter(i => i.destination == dest);
    }

    // вывод на страницу номеров рейсов и типов самолетов, вылетающих в пункт назначения, название которого совпало с
    // названием, выбранным из массива названий пунктов назначений при помощи генератора случайных чисел (если таких
    // рейсов нет, вывести соответствующее сообщение)
    selectAndShowByDestination(): void {
        let dest = Utils.getDestination();

        // выборка
        let items = this.selectByDestination(dest);

        // вывод записей
        this.show(items, `Рейсы. Выборка по пункту назначения: "${dest}"`);

        // если нет записей
        if (items.length == 0)
            this._output.message.show();
    }

    // выборка по типу самолёта
    selectByAircraftType(type: string): Aeroflot[] {
        return this._data.filter(i => i.aircraftType == type);
    }

    // вывод на страницу номеров рейсов и названий пунктов назначения для типа самолета, выбранного из массива типов
    // при помощи генератора случайных чисел.
    selectAndShowByAircraftType(): void {
        let type = Utils.getAircraftType();

        // выборка
        let items = this.selectByAircraftType(type);

        // вывод записей
        this.show(items, `Рейсы. Выборка по типу самолёта: "${type}"`);

        // если нет записей
        if (items.length == 0)
            this._output.message.show();
    }
}


// инициализация страницы
$(() => {
    let task = new Task01({
        title: $("#titleId"),
        tbody: $("#tbodyId"),
        message: $("#alertId")
    });

    // вывод начальных данных
    task.show();

    // все записи
    $("#dataAllId").on("click", () => {
        task.show();
    })

    // генерация новых данных
    $("#initId").on("click", () => {
        task.init();
        task.show();
    });

    // выборка по пункту назначения
    $("#filterByDestinationId").on("click", () => {
        task.selectAndShowByDestination();
    });

    // выборка по типу самолёта
    $("#filterByAircraftTypeId").on("click", () => {
        task.selectAndShowByAircraftType();
    });
})
