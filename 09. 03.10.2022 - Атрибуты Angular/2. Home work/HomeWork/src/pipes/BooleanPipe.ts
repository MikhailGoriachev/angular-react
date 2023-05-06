import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'booleanPipe'
})
export class BooleanPipe implements PipeTransform {

    transform(value: boolean, ...args: unknown[]): string {
        return value ? 'да' : 'нет';
    }
}
