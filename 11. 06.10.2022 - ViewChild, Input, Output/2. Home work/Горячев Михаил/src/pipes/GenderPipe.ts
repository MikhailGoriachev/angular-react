import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'gender'
})
// Pipe для вывода гендера
export class GenderPipe implements PipeTransform {

    transform(value: boolean, ...args: unknown[]): string {
        return value ? "муж." : "жен.";
    }
}
