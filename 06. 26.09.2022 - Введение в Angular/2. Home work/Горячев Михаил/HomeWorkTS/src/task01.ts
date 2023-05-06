// Задача 1. Спроектируйте обобщённый класс (дженерик) с ограничениями, для хранения одномерного массива. Класс
// должен иметь следующий функционал:
// •	начальная инициализация массива (заполнение в методе случайными значениями)
// •	вывод массива в консоль
// •	определение количества локальных минимумов в массиве (элементов, меньших своих левого и правого соседа,
//      первый и последний элементы не могут быть локальными минимумами)
// •	упорядочение массива по возрастанию
// •	удаление первого элемента массива
// •	добавление элемента в конец массива
// •	итератор для перебора элементов массива циклом for … of
// Проверить работу приложения на типах данных:
// •	number (предполагается разработка класса-оболочки хранения поля типа number)
// •	Person (fullName: string, age: number, salary: number) – хранит полное имя, возраст, оклад.  Локальный
//      минимум ищем по окладу, упорядочение по убыванию возраста.

import {Queue} from "./models/task01/Queue";
import {Person} from "./models/Person";
import {Utils} from "./Utils";
import {NumberItem} from "./models/task01/NumberItem";

export class Task01 {

    // персоны
    public personQueue: Queue<Person>;

    // числа
    public numberQueue: Queue<NumberItem>;


    // конструктор
    constructor(public output: { personsTbody: JQuery, numbersTbody: JQuery }) {
        this.output = output;
        this.personQueue = new Queue<Person>(Person.generate);
        this.numberQueue = new Queue<NumberItem>(NumberItem.generate);
        this.initPersons();
        this.initNumbers();
    }


    // инициализация персон
    initPersons() {
        this.personQueue.init();
    }

    // инициализация чисел
    initNumbers() {
        this.numberQueue.init();
    }

    // вывод персон
    showPersons() {
        this.output.personsTbody.empty();

        let i = 1;
        for (let s of this.personQueue) {
            this.output.personsTbody.append(s.toTableRow(i++));
        }
    }

    // вывод чисел
    showNumbers() {
        this.output.numbersTbody.empty();

        let i = 1;
        for (const n of this.numberQueue) {
            this.output.numbersTbody.append(`
                <tr>
                    <td>${i++}</td>
                    <td>${n}</td>
                </tr>
            `);
        }
    }
}

// инициализация страницы
export function pageInitTask01() {
    $(() => {

        // задание
        let task = new Task01({
            personsTbody: $("#personsTbodyId"),
            numbersTbody: $("#numbersTbodyId")
        });

        // инициализация и вывод очередей
        task.showPersons();
        task.showNumbers();

        // элементы GUI
        let initBtn = $("#initTask01Id");
        let pushBtn = $("#pushId");
        let shiftBtn = $("#shiftId");
        let orderBtn = $("#orderId");
        let localMinBtn = $("#localMinId");
        let consoleBtn = $("#consoleId");
        let body = $("#modalBodyId");
        let title = $("#modalTitleId");
        // let modal = $("#modalDialogId");

        // вкладка с персонами
        let personsTab = $("#persons-tab");

        // установка вкладки с персонами
        personsTab.on("click", () => {

            // инициализация
            initBtn.off("click");
            initBtn.on("click", () => {
                task.initPersons();
                task.showPersons();
            });

            // добавить
            pushBtn.off("click");
            pushBtn.on("click", () => {
                task.personQueue.push(Person.generate());
                task.showPersons();
            });

            // удалить
            shiftBtn.off("click");
            shiftBtn.on("click", () => {
                task.personQueue.shift();
                task.showPersons();
            });

            // вывод массива в консоль
            consoleBtn.off("click");
            consoleBtn.on("click", () => {
                task.personQueue.showToConsole();
            });

            // количество локальных минимумов
            localMinBtn.off("click");
            localMinBtn.on("click", () => {
                title.html("Очередь персон");
                body.html(`Количество локальных минимумов (по окладу): ${task.personQueue.localCountMin()}`);
            });

            // упорядочивание
            orderBtn.off("click");
            orderBtn.on("click", () => {
                task.personQueue.orderBy();
                task.showPersons();
            });
        })

        // вызов события click для инициализации первой вкладки
        personsTab.trigger("click");

        // установка вкладки с числами
        $("#numbers-tab").on("click", () => {

            // инициализация
            initBtn.off("click");
            initBtn.on("click", () => {
                task.initNumbers();
                task.showNumbers();
            });

            // добавить
            pushBtn.off("click");
            pushBtn.on("click", () => {
                task.numberQueue.push(NumberItem.generate());
                task.showNumbers();
            });

            // удалить
            shiftBtn.off("click");
            shiftBtn.on("click", () => {
                task.numberQueue.shift();
                task.showNumbers();
            });

            // вывод массива в консоль
            consoleBtn.off("click");
            consoleBtn.on("click", () => {
                task.numberQueue.showToConsole();
            });

            // количество локальных минимумов
            localMinBtn.off("click");
            localMinBtn.on("click", () => {
                title.html("Очередь чисел");
                body.html(`Количество локальных минимумов: ${task.numberQueue.localCountMin()}`);
            });

            // упорядочивание
            orderBtn.off("click");
            orderBtn.on("click", () => {
                task.numberQueue.orderBy();
                task.showNumbers();
            });
        });
    });
}
