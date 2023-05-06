import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Utils} from 'src/assets/Utils';
import {Student} from "../../../models/task01/Student";
import {StudentsDataService} from "../../services/students-data.service";
import {Level} from "../../../models/task01/Level";

@Component({
    selector: 'app-student-form',
    templateUrl: './student-form.component.html'
})
export class StudentFormComponent implements OnChanges {

    // тип формы
    @Input() isCreateMode: boolean = true;

    // событие submit
    @Output() onSubmitEvent: EventEmitter<Student> = new EventEmitter<Student>();

    // студент
    private _sourceStudent: Student = new Student();

    get sourceStudent(): Student {
        return this._sourceStudent;
    }

    set sourceStudent(value: Student) {
        this._sourceStudent = value;

        this.form.patchValue({
            ...this._sourceStudent,
            levelName: this._sourceStudent.level?.name!,
            dateOfBirthString: (this._sourceStudent.dateOfBirth ?? new Date(Date.now())).toISOString().split("T")[0]
        });
    }

    // форма
    form: FormGroup = this._fb.group({
        id: [0],
        fullName: [null, [Validators.required]],
        dateOfBirthString: [null, [Validators.required]],
        phone: ["+38(0", [Validators.required, Validators.pattern(/\+38\(0[0-9]{2}\)-[0-9]{3}-\d{2}-\d{2}/)]],
        email: [null, [Validators.required, Validators.email]],
        levelName: [null, [Validators.required]],
        coach: [null, [Validators.required]],
        group: [null, [Validators.required]],
    });

    // список тренеров
    @Input() coachList: string[] = [];

    // список разрядов
    @Input() levelList: Level[] = [];

    // список групп
    @Input() groupList: string[] = [];

    // утилиты
    Utils = Utils;


    // конструктор
    constructor(private _data: StudentsDataService, private _fb: FormBuilder) {
    }


    // событие изменения параметров
    ngOnChanges(changes: SimpleChanges) {
        if (changes['sourceStudent'] !== undefined) {
            console.dir(this._sourceStudent)
            this.form.patchValue({
                ...this._sourceStudent,
                levelName: this._sourceStudent.level?.name!,
                dateOfBirthString: (this._sourceStudent.dateOfBirth ?? new Date(Date.now())).toISOString().split("T")[0]
            });
        }
    }

    // сброс данных формы
    resetForm(): void {
        this.form.reset();
    }

    // обработчик формы
    onSubmit(form: FormGroup) {
        let item = Object.assign(new Student, {
            ...form.value,
            level: this.levelList.find(l => l.name === form.value['levelName']!),
            dateOfBirth: new Date(form.value['dateOfBirthString'])
        });

        this.onSubmitEvent.emit(item);
    }
}
