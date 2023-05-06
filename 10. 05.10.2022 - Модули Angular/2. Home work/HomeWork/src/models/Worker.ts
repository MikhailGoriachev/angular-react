// Класс Работник

//  Создать массив объектов класса Worker. В массиве должно быть не менее 10 экземпляров. В объекте Worker должны быть
//  следующие поля:
//  •	идентификатор работника
//  •	фамилия и инициалы работника;
//  •	название занимаемой должности;
//  •	пол (мужской или женский, другие варианты не требуются);
//  •	год поступления на работу;
//  •	имя файла с фотографией работника (графические файлы, рекомендуемые имена файлов: man_001.jpg, woman_001.jpg,
//      подготовьте файлы заранее, добавлять файлы в приложении не надо);
//  •	величина оклада работника;
//  •	метод вычисления стажа работника для текущей даты.

import {Utils} from "src/assets/Utils";
import {Gender} from "./Gender";

export class Worker {

    // идентификатор
    id: number = 0;

    // фамилия и инициалы
    fullName: string = "";

    // название занимаемой должности
    position: string = "";

    // пол
    gender: Gender = Gender.male;

    // год поступления на работу
    yearOfEmployment: number = 2022;

    // величина оклада работника
    salary: number = 0;

    // имя файла с фотографией работника
    image: string = "";


    // конструктор
    constructor(id?: number, fullName?: string, position?: string, gender?: Gender, yearOfEmployment?: number, salary?: number, fileName?: string) {
        this.id = id ?? this.id;
        this.fullName = fullName ?? this.fullName;
        this.position = position ?? this.position;
        this.gender = gender ?? this.gender;
        this.yearOfEmployment = yearOfEmployment ?? this.yearOfEmployment;
        this.salary = salary ?? this.salary;
        this.image = fileName ?? this.image;
    }


    // метод вычисления стажа работника для текущей даты
    getExperience(): number {
        return new Date().getFullYear() - this.yearOfEmployment;
    }

    // получить сгенерированный билет
    static generate(id: number) {
        // гендер
        let gender = (Math.random() * 10 & 1) === 1 ? Gender.male : Gender.female;

        let fullName = Utils.getFullName(gender === Gender.male ? "male" : "female");

        return new Worker(
            id,
            `${fullName.surname} ${fullName.name[0]}. ${fullName.patronymic[0]}.`,
            Utils.getPosition(),
            gender,
            Utils.getInt(2002, new Date().getFullYear()),
            Utils.getInt(10, 300) * 1000,
            Utils.getFileNameGender(gender)
        );
    }

    assign(obj: Worker) {
        Object.assign(this, obj);

        return this;
    }
}
