import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-binding01interpolation',
    templateUrl: './binding01interpolation.component.html'
    /* !!! т.к. файл стилей не нужен, он был удалён !!!
    *      но тогда не указывается свойств декоратора для подключения CSS
    * */
})
export class Binding01InterpolationComponent implements OnInit {
    // набор свойств базовых и ссылочных типов
    // для демо интерполяции
    propertyOne = 'Hello';
    propertyTwo = 111;
    propertyBool = true;
    propertyObj1 = {};

    propertyObj2 = {
        prop1: 'some value'
    };

    emptyProp;
    notEmptyProp;

    constructor() {
        this.notEmptyProp = 'not empty';

        // запуск таймера для изменения свойства
        this.startInterval();
    }

    returnStringMethod() {
        return 'hello some string text';
    }

    // демонстрация вывода актуальных значений свойства
    counter: number = 0;

    startInterval() {
        setInterval(() => this.counter++, 1_000)
    }

    ngOnInit() {
    }
}
