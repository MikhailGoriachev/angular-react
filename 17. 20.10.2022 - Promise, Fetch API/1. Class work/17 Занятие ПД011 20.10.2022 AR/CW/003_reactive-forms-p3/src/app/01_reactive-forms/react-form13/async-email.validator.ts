import {FormControl} from "@angular/forms";

export function asyncEmailValidator(control: FormControl): Promise<any> {
    return new Promise(resolve => {
        setTimeout(() => {
            control.value === 'customer@shop.com'
                ? resolve({registeredEmail: true}) // не валидно
                : resolve(null)                    // валидно
        }, 2_500)
    });
} // asyncEmailValidator
