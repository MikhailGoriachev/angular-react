// Класс Прямоугольник
class Rectangle extends Figure implements IFlatFigure {

    // сторона a
    private _a: number;

    get a(): number {
        return this._a;
    }

    set a(value: number) {
        this._a = value > 0 ? value : this._a;
    }

    // сторона b
    private _b: number;

    get b(): number {
        return this._b;
    }

    set b(value: number) {
        this._b = value > 0 ? value : this._b;
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
    constructor(a: number, b: number) {
        super("Прямоугольник");
        this._a = a;
        this._b = b;
        this._image = "rectangle.png";
    }

    // вычисление площади поверхности
    area(): number {
        return this._a * this._b;
    }

    // вычисление периметра
    perimeter(): number {
        return (this._a + this._b) * 2;
    }

    // функция вывода фигуры
    toTableRow(n: number): string {
        // строка для вывода
        return `
            <tr>
                <td>${n}</td>
                <td><img src="../images/figures/${this.image}" class="w-10rem" /></td>
                <td>${this.name}</td>
                <td>a: ${this._a.toFixed(5)}</td>
                <td>b: ${this._b.toFixed(5)}</td>
                <td>————</td>
                <td>${this.perimeter().toFixed(5)}</td>
                <td>${this.area().toFixed(5)}</td>
            </tr>
        `;
    }
}
