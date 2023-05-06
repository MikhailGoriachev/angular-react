let year: string[]; // массив строковых значений
year = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

// [ts] type ('string | number)[] is not assignable to type string[]
// year = [1, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// определение числового массива и его инициализация
let list: number[] = [1, 2, 3];
for(let i = 0; i < list.length; i++) {
    console.log(list[i]);
}
list.push(42);
console.log(`Новый размер массива ${list.length}`);

// создание массива используя generic тип данных Array
// let values: Array<Array<number>> = [[-1, 5, 6], [-2, 7, 8], [-3, 9, 0]];
let values: Array<number> = [-1, -2, -3];
for(let i = 0; i < values.length; i++) {
    console.log(values[i]);
}