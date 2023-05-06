namespace Shapes {
    
    export class Circle { 
        constructor() { console.log("Circle"); }
    }
    export class Square { 
        constructor() { console.log("Square"); }
    }

    // вложенное пространство имен
    export namespace Complex {
        export class Image {
            constructor() { console.log("Image"); }
        }
        export class Animation { 
            constructor() { console.log("Animation"); }
        }
    }
}

// создание псевдонима с именем complex для пространства имен Shapes.Complex
//          alias
import complex = Shapes.Complex;

let img1 = new complex.Image();
let img2 = new Shapes.Complex.Image(); // тоже что и предыдущая строка

let animation1 = new complex.Animation();
let animation2 = new Shapes.Complex.Animation();
