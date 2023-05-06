// Класс Фильм
// фильм описывается названием, фамилией и инициалами режиссера, жанром, годом выпуска
export class Film {

    // название
    name: string = "";

    // фамилия и инициалы режиссер
    director: string = "";

    // жанр
    genre: string = "";

    // год выпуска
    year: number = 0;


    // конструктор
    constructor(name?: string, director?: string, genre?: string, year?: number) {
        this.name = name ?? this.name;
        this.director = director ?? this.director;
        this.genre = genre ?? this.genre;
        this.year = year ?? this.year;
    }
}
