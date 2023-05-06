function writeLog<T>(value: T) : T {
    // console.log(value.length); // свойство length не существует на типе Т
    // так как в качестве значения для типа Т может быть любой тип данных, компилятор проверяет
    // чтобы обращения к такому типу не привели к исключениям.
    // например у типа string свойствао length существует, а в типе number его нет
    console.log(value);
    return value;
}

// функция принимает массив типа Т
function writeLogArray1<T>(value: T[]) : T[] {
    // массивы имеют свойство length
    console.log(value.length);
    return value;
}

// Рекомендация - использовать Array<T> для многомерных массивов
function writeLogArray2<T>(value: Array<Array<T>>) : Array<T> {
    console.log(value.length); // массивы имеют свойство length
    return value[0];
}

// -----------------------------------------------------
