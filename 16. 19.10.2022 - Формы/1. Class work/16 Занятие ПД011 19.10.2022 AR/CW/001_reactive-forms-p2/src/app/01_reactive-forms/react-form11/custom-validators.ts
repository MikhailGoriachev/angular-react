// пользовательские валидаторы - статические методы или функции
import {AbstractControl, ValidatorFn} from "@angular/forms";

export class UserDataValidation {
    static passport(control: AbstractControl /*поле с формы*/): { [key: string]: any } {
        let passportRegex = /^([A-ZА-Я]{2}[0-9]{6})$|^([0-9]{9})$/;
        // Значение поля из формы
        let value = control.value;

        // Проверка поля по регулярному выражению
        return passportRegex.test(value)?null!:{"passportValidator": {value}};
    }

    // статический метод - пользовательский валидатор с параметрами
    // возвращает функцию, выполняющую валидацию, параметры замыкаются
    // в возвращаемой функции
    static birthYear(minYear: number, maxYear: number): ValidatorFn {
        return (control: AbstractControl /*поле формы*/): { [key: string]: any } => {
            let value = control.value;
            // Значение поля из формы
            let age: number = parseInt(value);
            // Проверки
            if (isNaN(age)) {
                return {"ageValidator": {value: 'Введено не число. Введите корректный год рождения'}};
            } else if (age != control.value) {
                return {"ageValidator": {value: 'Дробные числа не допускаются. Введите корректный год рождения'}};
            } else if (age < minYear || age > maxYear) {
                return {"ageValidator": {value: 'Не подходящий возраст.'}};
            } else {
                return null!;
            } // if
        } // return
    } // birthYear
} // class userDataValidation


// функция - пользовательский валидатор - без пользовательских параметров
// выполняем валидацию
export function passportFunc(control: AbstractControl /*поле формы*/): { [key: string]: any } {
    let passportRegex = /^([A-ZА-Я]{2}[0-9]{6})$|^([0-9]{9})$/;
    // Значение поля из формы
    let value = control.value;

    // Проверка поля по регулярному выражению
    return passportRegex.test(value)?null!:{"passportValidator": {value}};
} // passportFunc
