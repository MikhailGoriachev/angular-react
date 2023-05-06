// Задача 3. Описать функцию rectPS(x1, y1, x2, y2), вычисляющую периметр и площадь прямоугольника со сторонами,
// параллельными осям координат, по координатам (x1, y1), (x2, y2) его противоположных вершин. Функция возвращает
// кортеж с периметром и площадью. С помощью этой функции найти периметры и площади трех прямоугольников с данными
// противоположными вершинами.

// размер коллекции исходных данных
const sizeDataTask03 = 5;

// функция вычисляющая периметр и площадь прямоугольника
function rectPS(x1: number, y1: number, x2: number, y2: number): [perimeter: number, area: number] {
    let a = Math.abs(x2 - x1), b = Math.abs(y2 - y1);
    return [(a + b) * 2, a * b];
}

// метод инициализации страницы
function initTask03(): void {

    // описание типа для исходных данных
    type DataType = [x1: number, y1: number, x2: number, y2: number];

    // коллекция исходных данных для вычислений
    let data: Array<DataType> = new Array(sizeDataTask03)
        .fill(0)
        .map(() => [
            Utils.getDouble(-10, 0),
            Utils.getDouble(-10, 0),
            Utils.getDouble(0, 10),
            Utils.getDouble(0, 10)]
        );

    // описание типа для результирующих данных
    type ResultType = [x1: number, y1: number, x2: number, y2: number, aMean: number, gMean: number];

    // обработка исходных данных
    let results: Array<ResultType> = data.map(d => {
        let res: [perimeter: number, area: number] = rectPS(d[0], d[1], d[2], d[3]);
        return [d[0], d[1], d[2], d[3], res[0], res[1]];
    })

    let n = 1;

    // вывод данных
    $("#tbodyId").html(results.reduce((p, c) => p + `
    <tr>
        <td>${n++}</td>
        <td>${c[0].toFixed(5)}</td>
        <td>${c[1].toFixed(5)}</td>
        <td>${c[2].toFixed(5)}</td>
        <td>${c[3].toFixed(5)}</td>
        <td>${c[4].toFixed(5)}</td>
        <td>${c[5].toFixed(5)}</td>
    </tr>   
    `, ""));
}

// инициализация страницы
$(initTask03);
