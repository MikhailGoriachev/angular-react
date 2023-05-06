import {FormControl, ValidatorFn} from "@angular/forms";

export function match(passControl1: FormControl, passControl2: FormControl): ValidatorFn {
    return () => {
        if (!passControl1.value || !passControl2.value) return {error: true};

        // возвращение ссылки на функцию - то же, что вернуть true
        // собственно true вернуть не можем, т.к. требуется ссылочный тип
        // но можем вернуть какой-либо не пустой объект :)
        // return (passControl1.value === passControl2.value)?null:{match};
        return (passControl1.value === passControl2.value)?null:{error: true};
    }
}
