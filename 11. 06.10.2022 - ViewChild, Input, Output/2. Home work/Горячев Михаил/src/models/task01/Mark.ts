// Класс Оценка
import {Utils} from "../../assets/Utils";

export class Mark {

    // диапазон оценок
    static readonly minMark = 1;
    static readonly maxMark = 5;

    // название предмета
    schoolSubjects = "";

    // оценка
    private _mark: number = 1;

    get mark(): number {
        return this._mark;
    }

    set mark(value: number) {
        this._mark = value >= Mark.minMark && value <= Mark.maxMark ? value : this._mark;
    }


    // конструктор
    constructor(schoolSubjects?: string, mark?: number) {
        this.schoolSubjects = schoolSubjects ?? this.schoolSubjects;
        this._mark = mark ?? this._mark;
    }


    // сгенерировать объект
    static generate(): Mark {
        return new Mark(Utils.getSchoolSubject(), Utils.getInt(Mark.minMark + 1, Mark.maxMark + 1))
    }
}
