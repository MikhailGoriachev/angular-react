// При создании переменой тип которой не известен во время написания приложения можно использовать
// тип данных any. Такой тип удобно применять в ситуациях, когда значение вводится пользователем или
// получается в результате работы другой библиотеки.
// Такой тип данных не проходит проверку во время компиляции.

let someValue: any = "Hello world"; // string
console.log(someValue);

someValue = false;                  // boolean
console.log(someValue);

someValue = 100;                    // number
console.log(someValue);             // 100
someValue.toFixed(3);   // ok

someValue = "test";
someValue.toFixed(3); // Ошибка на этапе выполнения - TypeError: someValue.toFixed is not a Function