import {Mark} from "./Mark";
import {Utils} from "../../assets/Utils";

// Класс Студент
export class Student {

    // размер списка оценок
    static readonly markListLenght = 5;

    // id
    id: number = 0;

    // фамилия и инициалы;
    fullName: string = "";

    // пол студента; (true - мужской, false - женский)
    gender: boolean = false;

    // фотография студента
    image: string = "";

    // название группы;
    group: string = "";

    // успеваемость (массив из пяти элементов типа Mark)
    markList: Mark[] = [];

    // средний балл
    get avgMark(): number {
        return this.markList.length != 0
            ? this.markList.reduce((p, c) => p += c.mark, 0) / this.markList.length
            : 0;
    }


    // конструктор
    constructor(id?: number, fullName?: string, gender?: boolean, image?: string, group?: string, markList?: Mark[]) {
        this.id = id ?? this.id;
        this.fullName = fullName ?? this.fullName;
        this.gender = gender ?? this.gender;
        this.image = image ?? this.image;
        this.group = group ?? this.group;
        this.markList = markList ?? this.markList;
    }


    // генерация объекта
    static generate(id: number): Student {
        let gender = Math.random() > 0.5;
        return new Student(
            id,
            Utils.getInitials(gender ? "male" : "female"),
            gender,
            Utils.getFileNameGender(gender),
            Utils.getGroupName(),
            [...Array(Student.markListLenght)].map(_ => Mark.generate())
        );
    }

    assign(obj: Student) {
        Object.assign(this, obj);
        this.markList = this.markList.map(m => Object.assign(new Mark(), m));

        return this;
    }
}
