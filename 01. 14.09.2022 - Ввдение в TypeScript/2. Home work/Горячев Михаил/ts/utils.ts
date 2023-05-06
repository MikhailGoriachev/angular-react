// утилиты

// случайное число
function getInt(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
