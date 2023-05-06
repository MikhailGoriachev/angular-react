import {Component, OnInit} from '@angular/core';
import {Utils} from "../../assets/Utils";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    // конструктор
    constructor() {

    }

    // обработчик события инициализации модуля
    ngOnInit(): void {
        // установка активности в панели навигации
        Utils.setNavTabActive("main");
    }

}
