import {AbstractControl, ValidatorFn} from "@angular/forms";

// валидатор для проверки минимума без включения
export function minGreatValidator(min: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let value = +control.value;
        return value > min ? null! : {"minGreatValidator": `Значение должно быть больше ${min}!`};
    }
}
