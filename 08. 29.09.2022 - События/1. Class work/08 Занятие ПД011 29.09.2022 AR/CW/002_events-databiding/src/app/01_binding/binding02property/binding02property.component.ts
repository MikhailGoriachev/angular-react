import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-binding02property',
    templateUrl: './binding02property.component.html',
    styleUrls: ['./binding02property.component.css']
})
export class Binding02PropertyComponent implements OnInit {


    constructor() {
    }

    Computer1Image: string = 'assets/CM-2M.jpg';
    Computer1ImageWidth: number = 420;

    Computer2Image: string = 'assets/CM-1210.jpg';
    Computer2ImageWidth: number = 360;

    //-----------------------------------------------

    // свойство для управления атрибутом checked радиокнопок
    // в разметке (т.е. свойством HTML checked)
    flag = false;

    ngOnInit() {
    }

}
