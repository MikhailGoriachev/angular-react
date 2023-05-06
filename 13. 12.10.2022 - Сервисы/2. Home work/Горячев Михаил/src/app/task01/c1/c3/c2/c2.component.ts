import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {CalculateService} from "../../../../services/calculateService/calculate.service";

@Component({
    selector: 'app-c2',
    templateUrl: './c2.component.html',
    providers: [CalculateService]
})
export class C2Component implements OnChanges {

    // числа
    @Input()
    numbers: { a: number, b: number } = null!;

    // результат
    @Output()
    resultReady: EventEmitter<{ z1: number, z2: number }> = new EventEmitter<{z1: number; z2: number}>();


    // конструктор
    constructor(private _service: CalculateService) {
    }


    // обработчик события изменения параметров
    ngOnChanges() {
        this.resultReady.emit(this._service.getResult(this.numbers));
    }
}
