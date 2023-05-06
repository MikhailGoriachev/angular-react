// Задача 2. Описать функцию mean(x, y), вычисляющую среднее арифметическое aMean=(x+y)/2 и среднее геометрическое
// gMean=√(x∙y), двух положительных чисел x и y. Возвращать aMean, gMean из функции в кортеже. С помощью этой функции
// найти среднее арифметическое и среднее геометрическое для трех пар случайных чисел их диапазона значений [-10, 10].

// размер коллекции исходных данных
const sizeData = 5;

// диапазон значений исходных данных
const rangeData = {
    min: -10,
    max: 10
}

// вычисление среднего арифметического и среднего геометричекого
function mean(x: number, y: number): [aMean: number, gMean: number] {
    return [(x + y) / 2, Math.sqrt(x * y)];
}

// метод инициализации страницы
function initTask02(): void {

    // описание типа для исходных данных
    type DataType = [x: number, y: number];

    // коллекция исходных данных для вычислений
    let data: Array<DataType> = new Array(sizeData)
        .fill(0)
        .map(i => [Utils.getDouble(rangeData.min, rangeData.max), Utils.getDouble(rangeData.min, rangeData.max)]);

    // описание типа для результирующих данных
    type ResultType = [x: number, y: number, aMean: number, gMean: number];

    // обработка исходных данных
    let results: Array<ResultType> = data.map(d => {
        let res: [aMean: number, gMean: number] = mean(d[0], d[1]);
        return [d[0], d[1], res[0], res[1]];
    })

    let n = 1;

    // вывод данных
    $("#tbodyId").html(results.reduce((p, c) => p + `
    <tr>
        <td>${n++}</td>
        <td>${c[0].toFixed(5)}</td>
        <td>${c[1].toFixed(5)}</td>
        <td>${c[2].toFixed(5)}</td>
        <td>${!isNaN(c[3]) ? c[3].toFixed(5) : "недоступно"}</td>
    </tr>   
    `,""));
}

// инициализация страницы
$(initTask02);
