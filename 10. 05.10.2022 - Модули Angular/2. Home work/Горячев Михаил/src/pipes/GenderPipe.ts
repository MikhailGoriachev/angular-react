import {Pipe, PipeTransform} from "@angular/core";
import {Gender} from "../models/Gender";

@Pipe({
    name: 'gender'
})
// Pipe для вывода гендера
export class GenderPipe implements PipeTransform {

    transform(value: Gender, ...args: unknown[]): string {
        return value === Gender.male ? "мужчина" : "женщина";
    }
}
