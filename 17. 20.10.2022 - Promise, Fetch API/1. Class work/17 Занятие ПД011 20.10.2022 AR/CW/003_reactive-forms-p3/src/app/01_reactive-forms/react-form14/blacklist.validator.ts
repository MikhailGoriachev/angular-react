import {FormControl} from "@angular/forms";
import {BlackListService} from "./blacklist.service";

// еще один пример асинхронного валидатора
export function blackListValidator(blackListService: BlackListService) {
    return (control: FormControl) => {

        return new Promise(function (resolve) {
            console.log('blacklist.v.ts work, started setTimeout');
            setTimeout(() => {

                blackListService.checkEmail(control.value)
                    .then(res => {
                        console.log(`resolve blackListValidator`, res);
                        res
                            ? resolve({ blackListValidator: { blocked: true }}) // не валидно
                            : resolve(null)                                     // валидно
                    })

            }, 2_000);
        });
    }
} // blackListValidator
