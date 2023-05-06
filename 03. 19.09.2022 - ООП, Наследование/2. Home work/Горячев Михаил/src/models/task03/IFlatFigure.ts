// Интерфейс Плоская фигура
interface IFlatFigure {

    // изображение фигуры
    image: string;

    // вычисление площади
    area: () => number;

    // вычисление периметра
    perimeter: () => number;

    // вывод в разметку
    toTableRow: (n: number) => string;
}
