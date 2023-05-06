// Задача 2. Каждая заявка на авиабилет содержит: пункт назначения, номер рейса, фамилию и инициалы пассажира,
// стоимость билета. Разработайте класс для хранения заявки, создайте массив заявок из 10 - 12 элементов.
// Выведите массив заявок в разметку, предусмотрите команды:
// •	Вывод исходной коллекции заявок
// •	Упорядочивание и вывод копии коллекции по пунктам назначения;
// •	Упорядочивание и вывод копии коллекции по стоимости билета;
// •	Упорядочивание и вывод копии коллекции, по номеру рейса
// •	Вывод копии коллекции, выделив все заявки со стоимостью билета выше значения, вводимого из строки ввода
// •	(не используйте формы), снимайте выделение через 10 с


import {Component, OnInit} from '@angular/core';
import {FlightTicket} from "../../models/FlightTicket";

@Component({
    selector: 'app-task02',
    templateUrl: './task02.component.html',
    styleUrls: ['./task02.component.css']
})
export class Task02Component implements OnInit {

    // время выделения
    private readonly _delay: number = 10_000;

    // таймер для выделения
    private _timer: NodeJS.Timeout | null = null

    // заявки на билеты
    private _tickets: FlightTicket[] = [];

    get tickets(): FlightTicket[] {
        return this._tickets;
    }

    set tickets(value: FlightTicket[]) {
        this._tickets = value;
    }

    // отображаемая коллекция
    private _ticketsView: FlightTicket[] = [];

    get ticketsView(): FlightTicket[] {
        return this._ticketsView;
    }

    set ticketsView(value: FlightTicket[]) {
        this._ticketsView = value;
    }

    // предикат для выделения записи
    private _isSelect: (ticket: FlightTicket) => boolean = () => false;

    get isSelect(): (ticket: FlightTicket) => boolean {
        return this._isSelect;
    }

    set isSelect(value: (ticket: FlightTicket) => boolean) {
        this._isSelect = value;
    }

    // конструктор
    constructor() {
    }


    // обработчик события загрузки компонента
    ngOnInit(): void {
        const count = 10;

        // инициализация данных
        this._ticketsView = this._tickets = [...Array(count)].map(() => FlightTicket.generate());
    }

    // вывод исходной коллекции заявок
    showDefault(): void {
        this._ticketsView = this._tickets;
    }

    // упорядочивание и вывод копии коллекции по пунктам назначения;
    showOrderByDestination(): void {
        this._ticketsView = this._tickets.slice()
            .sort((a, b) => a.destination.localeCompare(b.destination));
    }

    // упорядочивание и вывод копии коллекции по стоимости билета;
    showOrderByPrice(): void {
        this._ticketsView = this._tickets.slice()
            .sort((a, b) => a.price - (b.price));
    }

    // упорядочивание и вывод копии коллекции, по номеру рейса
    showOrderByFlightNumber(): void {
        this._ticketsView = this._tickets.slice()
            .sort((a, b) => a.flightNumber.localeCompare(b.flightNumber));
    }

    // вывод копии коллекции, выделив все заявки со стоимостью билета выше значения, вводимого из строки ввода
    // (не используйте формы), снимайте выделение через 10 с
    setPredicateByPriceOver(price: number | null): void {

        // остановка текущего таймера
        clearTimeout(this._timer!);

        // установка предиката для выделения
        this._isSelect = (t) => price !== null ? t.price >= price : false;

        // запуск и установка таймера
        this._timer = setTimeout(() => this._isSelect = () => false, this._delay);
    }
}
