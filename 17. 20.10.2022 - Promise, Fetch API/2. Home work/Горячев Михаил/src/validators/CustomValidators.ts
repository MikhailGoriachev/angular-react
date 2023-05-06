// Класс Пользовательские валидаторы
import {AbstractControl, FormControl} from "@angular/forms";

export class CustomValidators {

    // проверка диапазона
    static range(controlA: AbstractControl, controlB: AbstractControl) {
        return () => {
            return new Promise((resolve) => {
                return +controlA.value < +controlB.value
                    ? resolve(null)
                    : resolve({range: true});
            })
        }
    }
}
