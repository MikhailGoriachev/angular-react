import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Utils} from "../../../../assets/Utils";

@Component({
    selector: 'app-c3',
    templateUrl: './c3.component.html'
})
export class C3Component implements OnInit {

    // числа
    @Input()
    numbers: { a: number, b: number } = {a: 0, b: 0}

    // результат
    result: { z1: number, z2: number } = {z1: 0, z2: 0};

    // показатель равности z1 и z2
    get isEquals(): boolean {
        return Utils.equalsDouble(this.result.z1, this.result.z2);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    resultReadyHandler($event: { z1: number, z2: number }) {
        this.result = $event;
    }
}
