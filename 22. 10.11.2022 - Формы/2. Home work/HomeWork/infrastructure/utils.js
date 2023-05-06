// сравнение двух вещественных чисел
function equalsDouble(a, b) {
    return Math.abs(a - b) < 1e-10;
}

// получить целое случайное число
function getInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// получить вещественное случайное число
function getDouble(min, max) {
    return Math.random() * (max - min) + min;
}