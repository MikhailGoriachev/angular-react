class Rectangle {
    private _width: number;
    private _height: number;

    // метод для получения значения закрытого свойства
    public getWidth(): number {
        return this._width;
    }

    // метод для установки значения закрытому свойству
    public setWidth(value: number): void {
        this._width = (value <= 0)?1:value;
    }

    // accessors - механизм, который позволяет перехватить обращение к члену объекта
    // на запись или чтение.
    
    // getter 
    get height(): number {
        return this._height;
    }

    // setter
    set height(value: number) {
        this._height = (value <= 0)?1: value;
    }

    // метод класса
    // это просто старый добрый метод класса
    public calculateArea() : number {
        return this._width * this._height;
    }
}

let rect1: Rectangle = new Rectangle();

// установка ширины с помощью метода
rect1.setWidth(100);

// установка высоты с помощью setter.
// Запускается метод set на строке 28, значение 20 передается в качестве параметра
rect1.height = -20;

// чтение значение закрытого свойства с помощью метода
console.log(rect1.getWidth());

// чтение значения закрытого свойства с помощью аксесора. Тут вызывается
// метод get со строки 23
console.log(rect1.height);

let rectArea: number = rect1.calculateArea();
console.log(`площадь ${rectArea}`);




