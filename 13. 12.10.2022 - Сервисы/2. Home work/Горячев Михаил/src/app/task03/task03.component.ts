import {Component, OnInit} from '@angular/core';
import {ShipDataService} from "../services/shipDataService/ship-data.service";

@Component({
    selector: 'app-task03',
    templateUrl: './task03.component.html'
})
export class Task03Component {

    // файлы
    files: string[] = this._service.files;


    // конструктор
    constructor(private _service: ShipDataService) {
    }
}
