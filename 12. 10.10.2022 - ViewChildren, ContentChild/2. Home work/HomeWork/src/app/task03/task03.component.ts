import {Component, OnInit} from '@angular/core';
import {ShipData} from "../../models/Ships/ShipData";

@Component({
    selector: 'app-task03',
    templateUrl: './task03.component.html',
    styleUrls: ['./task03.component.css']
})
export class Task03Component implements OnInit {

    // файлы
    files: string[] = [...new Set(ShipData.data.map(s => s.imageFile))];

    constructor() {
    }

    ngOnInit(): void {
    }

}
