import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Student} from "../../../models/task01/Student";

@Component({
    selector: 'app-students-table',
    templateUrl: './students-table.component.html'
})
export class StudentsTableComponent implements OnChanges {

    // записи
    @Input() items: Student[] = [];

    // отображаемая коллекция
    itemsView: Student[] = [];

    // добавить
    @Output() onAddItem: EventEmitter<void> = new EventEmitter<void>();

    // изменить книгу
    @Output() onEditItem: EventEmitter<number> = new EventEmitter<number>();

    // удалить
    @Output() onRemoveItem: EventEmitter<number> = new EventEmitter<number>();

    // состояние сортировки
    stateSort = {
        isDesc: false,
        fieldName: ""
    };


    // обработчик события изменения свойств
    ngOnChanges() {
        this.itemsView = this.items;
    }

    // сортировка
    sortBy(fieldName: string = "", comp: (a: Student, b: Student) => number) {

        // сортировка
        this.itemsView?.sort(comp);

        if (this.stateSort.fieldName !== fieldName || this.stateSort.isDesc) {
            this.itemsView?.reverse();
            this.stateSort = {fieldName: fieldName, isDesc: false};
            return;
        }

        this.stateSort = {fieldName: fieldName, isDesc: true};
    }

    // упорядочивание по id
    sortById(): void {
        this.sortBy("id", (a, b) => a.id! - b.id!);
    }

    // упорядочивание по группе
    sortByGroup(): void {
        this.sortBy("group",
            (a, b) => a.group != b.group
                ? a.group!.localeCompare(b.group!)
                : (a.level!.value !== b.level!.value
                    ? b.level!.value - a.level!.value
                    : a.fullName!.localeCompare(b.fullName!)));
    }
}
