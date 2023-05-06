// Кортеж - упорядоченный набор фиксированной длины
let x: [string, number]; // определение кортежа
x = ["Hello", 10]; // инициализация кортежа

console.log(x); // (2)["Hello", 10]
console.log(x[0]); // Hello
console.log(x[1]); // 10

// кортеж на три значения
let y: [number, string, string] = [42, "Марк", "Уотни"];
console.log(y);
console.log(y[0]);
console.log(y[1]);
console.log(y[2]);

//y[0].substr(1); // [ts] Propery substr does not exist on type 'number'

let t1 = 12;
let t2 = 21;

// обмен значений переменных в кортеже
console.log(`${t1} ${t2}`);
[t1, t2] = [t2, t1];
console.log(`${t1} ${t2}`);