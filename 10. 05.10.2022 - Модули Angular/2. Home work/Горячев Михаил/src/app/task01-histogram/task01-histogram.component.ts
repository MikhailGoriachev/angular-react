import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Worker} from "../../models/Worker";
import {WorkerData} from "../../models/WorkerData";

@Component({
    selector: 'app-task01-histogram',
    templateUrl: './task01-histogram.component.html',
    styleUrls: ['./task01-histogram.component.css']
})
export class Task01HistogramComponent implements OnInit {

    // работники
    workerList: Worker[] = [];

    // элемент canvas из разметки tutorial: https://angular.io/api/core/ViewChild
    @ViewChild('canvasElement', {static: true})
    canvas: ElementRef<HTMLCanvasElement> | null = null;


    // конструктор
    constructor() {
    }


    // обработчик события инициализации компонента
    ngOnInit(): void {
        this.workerList = WorkerData.data;

        // отображение данных в гистограмме
        this.createBarChart(
            this.workerList.map((w) => w.getExperience()),
            800,
            400,
            'blue'
        );
    }

    // создание гистограммы
    createBarChart(data: number[], width: number, height: number, color: string) {

        this.canvas!.nativeElement.width = width;
        this.canvas!.nativeElement.height = height;
        let context = this.canvas!.nativeElement.getContext('2d')!;

        // находим максимальное значение в массиве данных
        let max = Math.max(...data);

        let scale = height / max;
        let barWidth = Math.floor(width / data.length);

        // создаём отдельный элемент диаграммы
        for (let i = 0; i < data.length; i++) {
            let barHeight = data[i] * scale,
                x = barWidth * i,
                y = height - barHeight;

            context.fillStyle = color;
            context.fillRect(x, y, barWidth - 2, barHeight);

            context.moveTo(x, y);
            context.textAlign = 'center';
            context.font = '12pt Verdana';
            context.fillStyle = 'white';
            context.fillText(data[i].toString(), x + barWidth / 2, y + 30);
        }
    };
}
