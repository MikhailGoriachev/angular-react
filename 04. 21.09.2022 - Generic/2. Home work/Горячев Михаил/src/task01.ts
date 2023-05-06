// Задача 1. Разработайте приложение TypeScript с выводом обработанных данных на страницу HTML по заданию.
// Реализуйте обобщенный класс Stack, обеспечивающий доступ LIFO на базе массива.
// Методы для реализации:
// •	Добавление на вершину стека
// •	Извлечение с вершины стека
// •	Чтение вершины стека
// •	Метод-генератор для просмотра стека
// Продемонстрируйте работу стека на числах, строках и объектах – экземплярах класса Ship из предыдущего задания.
//     Работу стеков разных типов демонстрируйте на разных HTML-страницах

class Task01 {

    // суда
    public shipStack: Stack<Ship>;

    // числа
    public numberStack: Stack<number>;

    // строки
    public stringStack: Stack<string>;


    // конструктор
    constructor(public output: { shipsTbody: JQuery, numbersTbody: JQuery, stringsTbody: JQuery }) {
        this.output = output;
        this.initShips();
        this.initNumbers();
        this.initStrings();
    }


    // инициализация судов
    initShips() {
        this.shipStack = new Stack<Ship>([...Array(12)].map(s => new Ship(Utils.getShipName(), Utils.getInt(300, 600) * 1e6, Utils.getInt(3, 5) * 10, 2000 + Utils.getInt(17, 20), new Coord(), Utils.getInt(100, 300), Utils.getPort())));
    }

    // инициализация чисел
    initNumbers() {
        this.numberStack = new Stack<number>([...Array(12)].map(s => Utils.getInt(10, 100)));
    }

    // инициализация строк
    initStrings() {
        this.stringStack = new Stack<string>(Utils.destinations.sort(() => Math.random()));
    }

    // вывод судов
    showShips() {
        this.output.shipsTbody.empty();

        let i = 1;
        for (let s of this.shipStack.getGenerator()) {
            this.output.shipsTbody.append(s.toTableRow(i++));
        }
    }

    // вывод чисел
    showNumbers() {
        this.output.numbersTbody.empty();

        console.log(this.numberStack);

        let i = 1;
        for (const n of this.numberStack.getGenerator()) {
            this.output.numbersTbody.append(`
                <tr>
                    <td>${i++}</td>
                    <td>${n}</td>
                </tr>
            `);
        }
    }

    // вывод строк
    showStrings() {
        this.output.stringsTbody.empty();

        let i = 1;
        for (const s of this.stringStack.getGenerator()) {
            this.output.stringsTbody.append(`
                <tr>
                    <td>${i++}</td>
                    <td>${s}</td>
                </tr>
            `);
        }
    }
}

// инициализация страницы
$(() => {

    // задание
    let task = new Task01({
        shipsTbody: $("#shipsTbodyId"),
        numbersTbody: $("#numbersTbodyId"),
        stringsTbody: $("#stringsTbodyId"),
    });

    // инициалиазация и вывод стеков
    task.showShips();
    task.showNumbers();
    task.showStrings();

    // элемененты GUI
    let initBtn = $("#initId");
    let pushBtn = $("#pushId");
    let popBtn = $("#popId");
    let topBtn = $("#topId");
    let body = $("#modalBodyId");
    let title = $("#modalTitleId");
    let modal = $("#modalDialogId");

    // таблица для отображения одного судна (pop, top)
    let tableShip = (n: number, s: Ship): string => `
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
                </tr>
                </thead>
    
                <tbody id="shipsTbody">
                    ${s.toTableRow(n)}
                </tbody>
            </table>
    `;

    // влкадка с суднами
    let shipsTab = $("#ships-tab");

    // установка вкладки с суднами
    shipsTab.on("click", () => {

        // установка класса для размера модального окна
        modal.addClass("modal-xl");

        // инициализация
        initBtn.off("click");
        initBtn.on("click", () => {
            task.initShips();
            task.showShips();
        });

        // добавить
        pushBtn.off("click");
        pushBtn.on("click", () => {
            task.shipStack.push(new Ship(Utils.getShipName(), Utils.getInt(300, 600) * 1e6, Utils.getInt(3, 5) * 10, 2000 + Utils.getInt(17, 20), new Coord(), Utils.getInt(100, 300), Utils.getPort()));
            task.showShips();
        });

        // получить
        popBtn.off("click");
        popBtn.on("click", () => {
            let ship = task.shipStack.pop();
            task.showShips();

            body.html(tableShip(task.shipStack.lenght + 1, ship));

            title.html("Судно. Получить (pop)");
        });

        // прочитать
        topBtn.off("click");
        topBtn.on("click", () => {
            let ship = task.shipStack.top();

            body.html(tableShip(task.shipStack.lenght, ship));

            title.html("Судно. Получить (pop)");
        });
    })

    // вызов события click для инициалиазции первой вкладки
    shipsTab.trigger("click");

    // таблица для отображениея одного элемента строки или числа
    let table = ((n: number, item: number | string) => `
        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th>&#8470;</th>
                <td>Значение</td>
            </tr>
            </thead>

            <tbody id="numbersTbodyId">
                <tr>
                    <td>${n}</td>
                    <td>${item}</td>
                </tr>
            </tbody>
        </table>`);

    // установка вкладки с числами
    $("#numbers-tab").on("click", () => {

        // удаление класса для размера модального окна
        modal.removeClass("modal-xl");

        // инициализация
        initBtn.off("click");
        initBtn.on("click", () => {
            task.initNumbers();
            task.showNumbers();
        });

        // добавить
        pushBtn.off("click");
        pushBtn.on("click", () => {
            task.numberStack.push(Utils.getInt(10, 100));
            task.showNumbers();
        });

        // получить
        popBtn.off("click");
        popBtn.on("click", () => {
            let number = task.numberStack.pop();
            task.showNumbers();

            body.html(table(task.numberStack.lenght + 1, number));

            title.html("Число. Получить (pop)");
        });

        // прочитать
        topBtn.off("click");
        topBtn.on("click", () => {
            let number = task.numberStack.top();
            task.showNumbers();

            body.html(table(task.numberStack.lenght, number));

            title.html("Число. Получить (pop)");
        });
    });

    // установка вкладки со строками
    $("#strings-tab").on("click", () => {

        // удаление класса для размера модального окна
        modal.removeClass("modal-xl");

        // инициализация
        initBtn.off("click");
        initBtn.on("click", () => {
            task.initStrings();
            task.showStrings();
        });

        // добавить
        pushBtn.off("click");
        pushBtn.on("click", () => {
            task.stringStack.push(Utils.getDestination());
            task.showStrings();
        });

        // получить
        popBtn.off("click");
        popBtn.on("click", () => {
            let string = task.stringStack.pop();
            task.showStrings();

            body.html(table(task.stringStack.lenght + 1, string));

            title.html("Строка. Получить (pop)");
        });

        // прочитать
        topBtn.off("click");
        topBtn.on("click", () => {
            let string = task.stringStack.top();
            task.showStrings();

            body.html(table(task.stringStack.lenght, string));

            title.html("Строка. Получить (pop)");
        });
    });
});
