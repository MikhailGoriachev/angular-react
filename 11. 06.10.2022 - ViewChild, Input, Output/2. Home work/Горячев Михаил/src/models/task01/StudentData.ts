import {Student} from "./Student";

// Класс для доступа к данным о студентах
export class StudentData {

    // ключ
    static readonly key: string = "studentList";

    // данные
    static get data(): Student[] {
        let json = localStorage.getItem(StudentData.key);

        if (json === null) {
            let id = 1;
            return this.data = [...Array(10)].map(() => Student.generate(id++))
        }

        return JSON.parse(json).map((s: Student) => new Student().assign(s));
    }

    static set data(value: Student[]) {
        localStorage.setItem(StudentData.key, JSON.stringify(value));
    }
}
