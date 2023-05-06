// Класс Треугольник
class Triangle extends Figure implements IFlatFigure {

    // стороны
    private _sides: { a: number, b: number, c: number };


    get sides(): { a: number; b: number; c: number } {
        return this._sides;
    }

    set sides(value: { a: number; b: number; c: number }) {
        this._sides = this.isTriangle(value) ? value : this._sides;
    }

    // изображение фигуры
    private _image: string;

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    // конструктор
    constructor(sides: { a: number; b: number; c: number }) {
        super("Треугольник");
        this._sides = sides;
        this._image = "triangle.png";
    }

    // проверка на корректность данных треугольника
    isTriangle(sides: { a: number; b: number; c: number }): boolean {
        return sides.a + sides.b > sides.c && sides.b + sides.c > sides.a && sides.c + sides.a > sides.b;
    }

    // вычисление площади поверхности
    area(): number {
        // полупериметр
        let p = this.perimeter() / 2;

        return Math.sqrt(p * (p - this._sides.a) * (p - this._sides.b) * (p - this._sides.c));
    }

    // вычисление периметра
    perimeter(): number {
        return this._sides.a + this._sides.b + this._sides.c;
    }

    // функция вывода фигуры
    toTableRow(n: number): string {
        // строка для вывода
        return `
            <tr>
                <td>${n}</td>
                <td><img src="../images/figures/${this.image}" class="w-10rem"/></td>
                <td>${this.name}</td>
                <td>a: ${this._sides.a.toFixed(5)}</td>
                <td>b: ${this._sides.b.toFixed(5)}</td>
                <td>c: ${this._sides.c.toFixed(5)}</td>
                <td>${this.perimeter().toFixed(5)}</td>
                <td>${this.area().toFixed(5)}</td>
            </tr>
        `;
    }
}
