import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../../models/task01/Todo";

@Component({
    selector: 'app-todos-table',
    templateUrl: './todos-table.component.html'
})
export class TodosTableComponent {

    // посты
    @Input() todos: Todo[] | undefined;

    // статистика
    stat: {
        amount: number,
        complete: number,
        noComplete: number
    } | undefined;


    // изменение параметров
    ngOnChanges() {
        let complete = this.todos!.length - this.todos!.reduce((p, c) => c.completed ? p + 1 : p, 0);

        this.stat = {
            amount: this.todos!.length,
            complete: complete,
            noComplete: this.todos!.length - complete
        }
    }
}
