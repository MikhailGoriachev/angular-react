// function* - generator function
function *stringSequence() {
    yield "Hello";
    yield " ";
    yield "мир";
    yield " ";
    yield "генераторов";
    yield "!";
}

// получение generator object само тело функции не выполняется
let iterable1 = stringSequence();
let result = "";

// когда будет вызван метод next начнет выполнятся generator funciton до первого ключевого слова yield
// после этого функция приостановит свою работу до следующего вызова метода next
for (const item of iterable1) { 
    result += item;
}
console.log(result);

// класс с методом-генератором
class MyStringCollection {

    private _values:string[];

    constructor() {
        this._values = [ "Hello", ", ", "мир", "!" ];
    }

    // метод-генератор
    *getValues() {
        for(let item of this._values) {
            yield item;
        }
    }
}

// получить итератор
let iterable2 = new MyStringCollection().getValues();
result = "";

// получаем значения из итератора
for (const item of iterable2) {
    result += item;
}
console.log(`Сформировали при помощи генератора: ${result}`);
console.log('Объект:');
console.log(iterable2);