import {FormControl} from "@angular/forms";

// синхронный пользовательский валидатор
export function emailValidator(control: FormControl) {
    console.log(`emailValidator check`);

    let emailRegex = /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
    let value = control.value;

    return emailRegex.test(value)
        ? null
        : {"emailValidator": {valid: false}};
} // emailValidator
