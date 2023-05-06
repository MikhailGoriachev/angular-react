// Boolean
let isDone: boolean = false;
// isDone = 1; // [ts] - type '1' is not assignable to type 'boolean'

console.log(isDone);

//  Number
let a1_decimal: number = 42;       // десятичная система счисления
let a2_hex:     number = 0x000a    // шестнадцатиричная система счисления
let a3_binary:  number = 0b1010    // двоичная система счисления
let a4_octal:   number = 0o12;     // восьмиричная система счисления

// вывод в десятичной системе счисления
console.log(a1_decimal);
console.log(a2_hex);
console.log(a3_binary);
console.log(a4_octal);

// String
let firstName: string = "Ivan";
let age: number = 25;
let messageTemplate: string = `Hello, my name is ${firstName} I'm ${age} years old.` // template string
let messageConcat: string = "Hello, my name is " + firstName + " I'm " + age + " years old." // concatenation

console.log(messageTemplate);
console.log(messageConcat);
