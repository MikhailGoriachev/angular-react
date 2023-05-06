// Класс для вычислений
class MathModel {

    public a: number;
    public b: number;

    // конструктор инициализирующий
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    // вычисление z1 для задание 14
    z1v14(): number {

        let cosA = Math.cos(this.a);
        let sinA = Math.sin(this.a);

        return (cosA + sinA) / (cosA - sinA);
    }

    // вычисление z2 для задание 14
    z2v14(): number {

        let prodA = 2 * this.a;

        return Math.tan(prodA) + 1 / Math.cos(prodA);
    }

    // вычисление z1 для задание 15
    z1v15(): number {

        let powB = this.b * this.b;

        return Math.sqrt(2 * this.b + 2 * Math.sqrt(powB - 4)) /
            (Math.sqrt(powB - 4) + this.b + 2);
    }

    // вычисление z2 для задание 15
    z2v15(): number {
        return 1 / Math.sqrt(this.b + 2);
    }
}
