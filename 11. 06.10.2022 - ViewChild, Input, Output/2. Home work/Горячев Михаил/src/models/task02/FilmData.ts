import {Film} from "./Film";
import {Utils} from "../../assets/Utils";

// Класс для доступа к данным о фильмах
export class FilmData {

    // ключ
    static readonly key: string = "filmList";

    // данные
    static get data(): Film[] {
        let json = localStorage.getItem(FilmData.key);

        if (json === null) {
            return this.data = Utils.filmList;
        }


        return JSON.parse(json).map((f: Film) => Object.assign(new Film(), f));
    }

    static set data(value: Film[]) {
        localStorage.setItem(FilmData.key, JSON.stringify(value));
    }
}
