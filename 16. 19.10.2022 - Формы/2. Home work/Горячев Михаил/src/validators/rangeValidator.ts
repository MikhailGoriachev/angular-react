import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";

// валидатор для проверки минимума без включения
export function rangeValidator(min: FormControl, max: FormControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

        if (!min.value || !max.value) return {error: true}

        let value = +control.value;
        // return +min.value < +max.value ? null! : {"rangeValidator": `Неверное значение диапазона!`};
        return +min.value < +max.value ? null! : {error: true};
    }
}
