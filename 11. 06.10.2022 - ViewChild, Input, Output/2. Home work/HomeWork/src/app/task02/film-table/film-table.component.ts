import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../../models/task02/Film";

@Component({
    selector: 'app-film-table',
    templateUrl: './film-table.component.html',
    styleUrls: ['./film-table.component.css']
})
export class FilmTableComponent implements OnInit {

    @Input()
    filmListView: Film[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }
}
