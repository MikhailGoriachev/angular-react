import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Post} from "../../../models/task01/Post";

@Component({
    selector: 'app-posts-table',
    templateUrl: './posts-table.component.html'
})
export class PostsTableComponent implements OnChanges{

    // посты
    @Input() posts: Post[] | undefined;

    // статистика
    stat: {
        amount: number,
        minLenght: number,
        avgLenght: number,
        maxLenght: number
    } | undefined;

    constructor() {
    }

    // изменение параметров
    ngOnChanges() {
        this.stat = {
            amount: this.posts!.length,
            minLenght: Math.min(...this.posts!.map(p => p.body!.length)),
            avgLenght: Math.min(...this.posts!.map(p => p.body!.length)),
            maxLenght: Math.min(...this.posts!.map(p => p.body!.length)),
        }
    }
}
