import {Component, OnInit} from '@angular/core';
import {text, $, Utils} from 'src/assets/Utils'

@Component({
    selector: 'app-task02',
    templateUrl: './task02.component.html',
    styleUrls: ['./task02.component.css']
})
export class Task02Component implements OnInit {

    // текст
    private _text: string = text;

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    // статистика
    get stat(): { minWords: string[]; maxWords: string[] } {
        return this.getStat();
    }


    // конструктор
    constructor() {

    }


    // обработчик события инициализации модуля
    ngOnInit(): void {
        // установка активности в панели навигации
        Utils.setNavTabActive("task02");

        // текст
        $("textId")!.innerHTML = this._text;

        // статистика
        let stat = this.stat;
        $("minSizeWordsId")!.innerHTML = stat.minWords.reduce((p, c) => p + `<li>${c}</li>`, "");
        $("maxSizeWordsId")!.innerHTML = stat.maxWords.reduce((p, c) => p + `<li>${c}</li>`, "");
    }

    // получение статистики
    getStat(): { minWords: string[]; maxWords: string[] } {

        let words = this._text.trim().split(/[\s-]+/);
        let lenList = words.map(w => w.length);

        let minSize = Math.min(...lenList);
        let maxSize = Math.max(...lenList);

        return {
            minWords: Array.from(new Set(words.filter(w => w.length === minSize))),
            maxWords: Array.from(new Set(words.filter(w => w.length === maxSize)))
        };
    }
}
