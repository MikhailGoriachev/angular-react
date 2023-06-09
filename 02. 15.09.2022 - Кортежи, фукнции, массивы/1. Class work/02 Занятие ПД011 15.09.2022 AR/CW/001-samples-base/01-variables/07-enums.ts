// enum - перечисление, тип данных, который позволяет набору целочисленных значений присвоить имена.
// по умолчанию перечисления нумеруют свои элементы начиная с 0
// Red = 0, Green = 1, Blue = 2
enum Color { Red, Green, Blue }
let c1: Color = Color.Green;
console.log(c1);

// каждому элементу перечисления явно устанавливается значение
enum Status { Success = 10, Error = 5, Rejected = 12}
let c2: Status = Status.Success;
console.log(c2);

// так как первому элементу явно установлено значение 2, все последующие будут продолжать нумерацию с 2
// Circle = 2, Triangle = 3, Square = 4
enum Shape { Circle = 2, Triangle, Square }
let c3: Shape = Shape.Square;
console.log(c3);

// обращаясь к перечислению через индексатор и указывая целочисленное значение
// можно получить строковое представление этого значения
let c4: string = Status[1];
console.log(`строковое представление для отсутсвующего значения Status == 1: '${c4}'`);

c4 = Status[10];
console.log(`строковое представление для существующего значения Status == 10: '${c4}'`);

///////////////////////////////////////////////////////////////////////
// Пример использования перечислений
///////////////////////////////////////////////////////////////////////

enum Fruit {
    Apple,
    Orange,
    Tomato
}

// без использования перечисления
function drawImage1(fruit: number) {
    let domElement: HTMLImageElement = document.createElement("img");

    switch(fruit) {
        case 0:
            domElement.src = "../images/apple.jpg";
        break;
        case 1:
            domElement.src = "../images/orange.jpg";
        break;
        case 2:
            domElement.src = "../images/tomato.jpg";
        break;
    }

    document.body.appendChild(domElement);
}

// с использованием перечисления
function drawImage2(fruit: Fruit) {
    let domElement: HTMLImageElement = document.createElement("img");

    switch(fruit) {
        case Fruit.Apple:
            domElement.src = "../images/apple.jpg";
        break;
        case Fruit.Orange:
            domElement.src = "../images/orange.jpg";
        break;
        case Fruit.Tomato:
            domElement.src = "../images/tomato.jpg";
        break;
    }

    document.body.appendChild(domElement);    
}

drawImage1(0);       // создать изображение с яблоком (не очевидно)
drawImage1(1);       // создать изображение с апельсином (не очевидно)
drawImage2(Fruit.Orange); // создать изображение апельсина (код  самодокументируемый)
drawImage2(Fruit.Tomato); // создать изображение помидора (код  самодокументируемый)
drawImage2(Fruit.Apple);  // создать изображение яблока (код  самодокументируемый)
