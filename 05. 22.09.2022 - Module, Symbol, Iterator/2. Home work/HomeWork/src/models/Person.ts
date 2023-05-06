import {Utils} from "../Utils.js";

// Класс Персона
export class Person {

    // ФИО
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    // возраст
    private _age: number;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value >= 0 ? value : this._age;
    }

    // оклад
    private _salary: number;

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value >= 0 ? value : this._salary;
    }


    // конструктор
    constructor(fullName: string = (() => {
                    let n = Utils.getFullName();
                    return `${n.name} ${n.surname[0]}. ${n.patronymic[0]}.`;
                })(),
                age: number = Utils.getInt(18, 65),
                salary: number = Utils.getInt(15, 45) * 1e3) {
        this.fullName = fullName;
        this.age = age;
        this.salary = salary;
    }

    // вывод в строку таблицы
    toTableRow(n: number): string {
        return `
                <tr>
                    <td>${n}</td>
                    <td>${this._fullName}</td>
                    <td>${this._age}</td>
                    <td>${this._salary}</td>
                </tr>`;
    }

    // получение значения оклада
    valueOf() {
        return this._salary;
    }
}
