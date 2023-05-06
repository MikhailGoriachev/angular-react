import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-c2',
    templateUrl: './c2.component.html'
})
export class C2Component implements OnInit, OnChanges {

    // числа
    @Input()
    numbers: { a: number, b: number } = null!;

    // результат
    @Output()
    resultReady: EventEmitter<{ z1: number, z2: number }> = new EventEmitter<{z1: number; z2: number}>();

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnChanges() {
        let temp2B = 2 * this.numbers.b;
        let temp = temp2B - this.numbers.a;
        let val = {
            z1: (Math.sin(this.numbers.a) + Math.cos(temp)) / (Math.cos(this.numbers.a) - Math.sin(temp)),
            z2: (1 + Math.sin(temp2B)) / Math.cos(temp2B)
        };
        console.log(this.numbers)
        console.log(val)
        this.resultReady.emit(val);

        // this.resultReady.emit({
        //     z1: (Math.sin(this.numbers.a) + Math.cos(temp)) / (Math.cos(this.numbers.a) - Math.sin(temp)),
        //     z2: (1 + Math.sin(temp2B)) / Math.cos(temp2B)
        // });
    }

}
