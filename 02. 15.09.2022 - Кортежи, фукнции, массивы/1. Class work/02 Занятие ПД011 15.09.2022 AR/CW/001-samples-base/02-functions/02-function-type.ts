// при создании переменной можно указать тип данных определяющий сигнатуру функции.
// параметры => возвращаемый тип

// переменная, способная хранить функцию, которая
// принимает два параметра типа number возвращает
// значение number
let myAdd: (x: number, y: number) => number;

// переменной может быть присвоена функция, которая ничего не принимает и не возвращает значений
let myProc: () => void;

function myAddDeclaration(x: number, y: number) : number {
    return x + y;
}

myAdd = myAddDeclaration;
console.log(myAdd(10, 32)); // вызов функции

// присваивание литеральной анонимной функции
myProc = function() {
    console.log("Hello world");
}
myProc(); // вызов функции