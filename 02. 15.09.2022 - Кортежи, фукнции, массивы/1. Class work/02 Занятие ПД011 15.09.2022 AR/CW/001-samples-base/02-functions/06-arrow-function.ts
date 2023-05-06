// arrow function - специальный синтаксис определения функций

// в переменной increment находиться функция, которая принимает один параметр и возвращает
// его значение увеличенное на 1.

let increment = function (x: number) { return x + 1; }
console.log(increment(6));

let incrementArrow1 = (x: number) => { return x + 1; }
console.log(incrementArrow1(6));

let incrementArrow2 = (x: number) => x + 1;
console.log(incrementArrow2(6));

let incrementArrow3 = x => x + 1;
console.log(incrementArrow3(6));