import { Utils } from "../Utils.js";
// Класс Персона
export class Person {
    // конструктор
    constructor(fullName = (() => {
        let n = Utils.getFullName();
        return `${n.name} ${n.surname[0]}. ${n.patronymic[0]}.`;
    })(), age = Utils.getInt(18, 65), salary = Utils.getInt(15, 45) * 1e3) {
        this.fullName = fullName;
        this.age = age;
        this.salary = salary;
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(value) {
        this._fullName = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value >= 0 ? value : this._age;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value >= 0 ? value : this._salary;
    }
    // вывод в строку таблицы
    toTableRow(n) {
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
//# sourceMappingURL=Person.js.map