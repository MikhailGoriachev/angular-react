import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Utils} from 'src/assets/Utils';
import {Student} from "../../../models/task01/Student";
import {StudentsDataService} from "../../services/students-data.service";
import {Level} from "../../../models/task01/Level";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-student-form',
    templateUrl: './student-form.component.html'
})
export class StudentFormComponent implements OnChanges, OnInit {

    // тип формы
    isCreateMode = true;

    // событие submit
    onSubmitHandler: (s: Student) => void = () => {
    };

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
    coachList: string[] = [];

    // список разрядов
    levelList: Level[] = [];

    // список групп
    groupList: string[] = [];

    // утилиты
    Utils = Utils;


    // конструктор
    constructor(private _data: StudentsDataService,
                private _fb: FormBuilder,
                private _router: Router,
                private _activeRoute: ActivatedRoute) {
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

    // обработчик события инициализации формы
    ngOnInit(): void {

        // инициализация данных для параметров
        this._data.getItems().subscribe(d => {

            // студенты
            let students = d.map(s => new Student().assign(s));

            // список тренеров
            this.coachList = Utils.coachList;

            // список разрядов
            this.levelList = Utils.levelList;

            // список групп
            this.groupList = [...new Set(students.map(c => c.group!))]
                .sort((a, b) => a.localeCompare(b));

            // получения данных из маршрута
            this._activeRoute.queryParams.subscribe((p) => {

                let id = p['id'];

                console.log(id);

                // если id не передан — режим создания
                if (id === undefined) {
                    this.addItem();
                    return;
                }

                // установка режима работы формы
                this.isCreateMode = false;

                // инициализация
                this.editItem(id);
            });
        });
    }

    // добавить студента
    addItem(): void {
        // установка обработчика событий
        this.onSubmitHandler = (b) => {
            delete b.id;
            this._data.addItem(b);

            this._router.navigateByUrl('/task01');
        }
    }

    // изменить студента
    editItem(id: number): void {
        // поиск данных
        this._data.getItem(id).subscribe((s) => {
            if (s === undefined)
                return;

            this.sourceStudent = new Student().assign(s);

            // установка обработчика событий
            this.onSubmitHandler = s => {
                this._data.editItem(id, s);

                this._router.navigateByUrl('/task01');
            }
        });
    }

    // обработчик формы
    onSubmit(form: FormGroup) {
        let item = Object.assign(new Student, {
            ...form.value,
            level: this.levelList.find(l => l.name === form.value['levelName']!),
            dateOfBirth: new Date(form.value['dateOfBirthString'])
        });

        this.onSubmitHandler(item);
    }
}
