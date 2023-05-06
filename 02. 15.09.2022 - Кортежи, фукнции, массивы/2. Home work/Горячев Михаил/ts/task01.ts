// Задача 1. В одномерном массиве, состоящем из n чисел вычислить:
// •	Количество элементов массива, равных нулю
// •	Количество отрицательных элементов массива
// •	Сумму элементов массива, расположенных после минимального элемента
// •	Сумму модулей элементов массива, расположенных после минимального по модулю элемента
// •	Упорядочить элементы массива по возрастанию модулей
// •	Заменить все отрицательные элементы массива их квадратами и упорядочить элементы массива по возрастанию

// массив
let array: Array<number> = [];

// размер массива
const size = 14;

// диапазон значений массива
const range = {min: -5, max: 3};

// генерация массива
function generateArray(): void {
    array = new Array<number>(size).fill(0).map(i => Utils.getInt(range.min, range.max));
}

// вывод массива
function showArray(): void {
    $("#arrayId").html(array.reduce((prev, cur) => prev + `<div class="block" data-value="${cur}">${cur}</div>`, ""));
}

// установка оформления по умолчанию для массива
function resetColor(): void {
    $("[data-value]").removeClass("active sub");
}

// Количество элементов массива, равных нулю
function point01(): void {

    // количество элемментов равных 0
    let count: number = 0;
    array.forEach(i => count += i == 0 ? 1 : 0);

    // вывод результата
    $("#resultId").html(
        `<li class="list-group-item"><h5>Количество элементов равных нулю: <b>${count}</b></h5></li>`
    );

    // установка оформления по умолчанию
    resetColor();

    // подсветка выбранных элементов
    $("[data-value=0]").addClass("active");
}

// Количество отрицательных элементов массива
function point02(): void {

    // количество отрицательных элемментов
    let count: number = 0;
    array.forEach(i => count += i < 0 ? 1 : 0);

    // вывод результата
    $("#resultId").html(
        `<li class="list-group-item"><h5>Количество отрицательных элементов: <b>${count}</b></h5></li>`
    );

    // установка оформления по умолчанию
    resetColor();

    // подсветка выбранных элементов
    $("[data-value]")
        .each((i, e) => {
            let elem = $(e);
            elem.addClass(+elem.data("value") < 0 ? "active" : "")
        });
}

// Сумму элементов массива, расположенных после минимального элемента
function point03(): void {

    // индекс минимального элемента
    let index: number = array.indexOf(Math.min.apply(null, [...array]));

    // сумма элементов после минимального
    let sum: number = array.reduce((p, c, i) => p + (i > index ? c : 0), 0);

    // вывод результата
    $("#resultId").html(
        `<li class="list-group-item"><h5>Сумма элементов, после минимального: <b>${sum}</b></h5></li>`
    );

    // установка оформления по умолчанию
    resetColor();

    // подсветка выбранных элементов
    $("[data-value]")
        .each((i, e) => {
            let elem = $(e);
            $(e).addClass(i == index ? "sub" : i > index ? "active" : "")
        });
}

// Сумму модулей элементов массива, расположенных после минимального по модулю элемента
function point04(): void {

    // проецирование массива по модулю
    let absArray: Array<number> = array.map(i => Math.abs(i));

    // индекс минимального элемента
    let index: number = absArray.indexOf(Math.min.apply(null, [...absArray]));

    // сумма элементов по модулю после минимального
    let sum: number = absArray.reduce((p, c, i) => p + (i > index ? Math.abs(c) : 0), 0);

    // вывод результата
    $("#resultId").html(
        `<li class="list-group-item"><h5>Сумма элементов по модулю, после минимального по модулю: <b>${sum}</b></h5></li>`
    );

    // установка оформления по умолчанию
    resetColor();

    // подсветка выбранных элементов
    $("[data-value]")
        .each((i, e) => {
            let elem = $(e);
            $(e).addClass(i == index ? "sub" : i > index ? "active" : "")
        });
}

// Упорядочить элементы массива по возрастанию модулей
function point05(): void {

    // сортировка
    array = array.sort((a, b) => Math.abs(a) - Math.abs(b));

    // вывод результата
    $("#resultId").html(
        `<li class="list-group-item"><h5>Упорядочены элементы массива по возрастанию модулей</h5></li>`
    );

    showArray();
}

// Заменить все отрицательные элементы массива их квадратами и упорядочить элементы массива по возрастанию
function point06(): void {

    // обработка и сортировка
    array = array.map(v => v < 0 ? v ** 2 : v).sort()

    // вывод результата
    $("#resultId").html(
        `<li class="list-group-item"><h5>Заменины все отрицательные элементы массива их квадратами и
                                                            упорядочены элементы массива по возрастанию</h5></li>`
    );

    showArray();
}

// метод инициализации страницы
function initTask01(): void {

    // генерация массива
    generateArray();

    // вывод массива
    showArray();

    // кнопка для генерации массива
    $("#initBtnId").on("click", () => {
        generateArray();
        showArray();

        // вывод результата
        $("#resultId").html(
            `<li class="list-group-item"><h5>Сгенерирован новый массив чисел</h5></li>`
        );
    });

    // кнопка пункт 1
    $("#point01").on("click", point01);

    // кнопка пункт 2
    $("#point02").on("click", point02);

    // кнопка пункт 3
    $("#point03").on("click", point03);

    // кнопка пункт 4
    $("#point04").on("click", point04);

    // кнопка пункт 5
    $("#point05").on("click", point05);

    // кнопка пункт 3
    $("#point06").on("click", point06);

    // обработка нажатия по списку управления
    $("#groupListId").on("click", (e) => {
        let target = $(e.target);
        target.parent().children().removeClass("active");
        target.addClass("active");
    })
}

// инициализация страницы
$(initTask01);
