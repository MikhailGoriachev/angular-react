
// Генерация случайного вещественного числа
export function getRandom(min: number, max:number): number {
  return Math.random() * (max - min) + min;
}

// Генерация случайного целого числа
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
