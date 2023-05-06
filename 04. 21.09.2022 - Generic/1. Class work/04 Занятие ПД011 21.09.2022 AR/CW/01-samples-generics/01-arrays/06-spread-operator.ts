let dataArray1: number[] = [1, 2, 3];

// spread operator - ES6, добавляем элементы массива dataArray1 в конец массива dataArray2
let dataArray2: number[] = [100, 200, 300, ...dataArray1];

console.log(dataArray2);

// применение spread operator к объектам
let point2D = { x: 10, y: 20 };

// object spread - свойства объекта point2D добавляются к свойствам объекта point3D
let point3D = { ...point2D, z: 30 };

console.log(point3D);

