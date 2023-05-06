import {Worker} from "./Workers";

export class Enterprise {
  static getWorkers() {
    return [
      new Worker( 1, 'Иванова О.Л.',  'пекарь',   false,2012, "woman001.jpg",  34_000),
      new Worker( 2, 'Баранова Е.К.', 'токарь',   false,2020, "woman002.jpg",  86_000),
      new Worker( 3, 'Котова К.Л.',   'слесарь',  false,2012, "woman003.jpg",  45_000),
      new Worker( 4, 'Хижняк П.В.',   'токарь',   true, 2020, "man001.jpg",    86_000),
      new Worker( 5, 'Хижняк В.Е.',   'пекарь',   false,2014, "woman004.jpg",  34_000),
      new Worker( 6, 'Кобелев А.Р.',  'слесарь',  true, 2014, "man002.jpg",    45_000),
      new Worker( 7, 'Яворский Р.Д.', 'токарь',   true, 2016, "man003.jpg",    86_000),
      new Worker( 8, 'Гревцова С.И.', 'пекарь',   false,2014, "woman005.jpg",  34_000),
      new Worker( 9, 'Кобелев А.С.',  'менеджер', true, 2020, "man004.jpg",   120_000),
      new Worker(10, 'Дивак С.С.',    'токарь',   true, 2016, "man005.jpg",    86_000),
      new Worker(11, 'Брегеда Н.А.',  'менеджер', false,2020, "woman006.jpg", 120_000),
      new Worker(12, 'Цыбенко Е.А.',  'пекарь',   false,2015, "woman007.jpg",  34_000),
    ];
  }
}
