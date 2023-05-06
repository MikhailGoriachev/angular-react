import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SelectType} from 'src/models/task01/SelectType';
import {Student} from "../../models/task01/Student";
import {Subscription} from "rxjs";
import {Utils} from 'src/assets/Utils';
import {StudentsDataService} from "../services/students-data.service";
import {FormBuilder, Validators} from "@angular/forms";
import {StudentFormComponent} from "./student-form/student-form.component";
import {CustomValidators} from "../../validators/CustomValidators";

@Component({
    selector: 'app-task01',
    templateUrl: './task01.component.html'
})
export class Task01Component implements OnInit {

    // форма студента
    @ViewChild(StudentFormComponent) studentForm!: StudentFormComponent;

    // исходные данные
    source: Student[] = [];

    // студенты
    students: Student[] = [];

    // перечисление выборок
    SelectType = SelectType;

    // тип выборки
    currentSelectType: SelectType = SelectType.ageRange;

    // подписка на событие обновления данных
    onChangesSubscribe: Subscription | undefined;

    // режим редактирования/создания
    isCreateStudent: boolean = true;

    // обработчик формы для студента
    formStudentHandler: (b: Student) => void = (b) => {
    };

    // список тренеров
    coachList: string[] = Utils.coachList;

    // список разрядов
    get levelList() {
        return Utils.levelList;
    }

    // список групп
    get groupList(): string[] {
        return [...new Set(this.source.map(c => c.group!))];
    }

    // список дат рождения
    get dateOfBirthList(): Date[] {
        return [...new Set(this.source.map(c => c.dateOfBirth!))];
    }

    // утилиты
    Utils = Utils;


    // конструктор
    constructor(private _data: StudentsDataService, private _fb: FormBuilder) {
    }


    // обработка события инициализации компонента
    ngOnInit(): void {
        this.updateItems();

        // подписка на событие изменения
        this.onChangesSubscribe = this._data.onChanges.subscribe(_ => this.updateItems())
    }

    // деструктор компонента
    ngOnDestroy(): void {
        this.onChangesSubscribe?.unsubscribe();
    }

    // обновление списка
    updateItems(): void {
        this._data.getItems().subscribe(d => this.source = this.students = d.map(s => new Student().assign(s)));
    }

    // добавить студента
    addItem(): void {
        // сброс данных формы
        this.studentForm.resetForm();

        this.studentForm.isCreateMode = true;
        this.studentForm.sourceStudent = new Student();

        // установка обработчика событий
        this.formStudentHandler = (b) => {
            b.id = undefined;
            this._data.addItem(b);
        }
    }

    // изменить студента
    editItem(id: number): void {
        // сброс данных формы
        this.studentForm.resetForm();

        // this.isCreateStudent = false;
        let item = this.source?.find(v => v.id === id);

        if (item === undefined)
            return;

        // this.currentStudent = item;

        this.studentForm.isCreateMode = false;
        this.studentForm.sourceStudent = item;

        // установка обработчика событий
        this.formStudentHandler = (b) => {
            b.id = id;
            this._data.editItem(id, b);
        }
    }

    // добавить студента
    removeItem(id: number): void {
        this._data.removeItem(id);
    }

    // вывод всех книг
    selectByDefault(): void {
        this.students = this.source;
    }

    // форма для выбора тренера
    formByCoach = this._fb.group({
        coach: [this.coachList[0], [Validators.required]]
    });

    // выборка студентов выбранного тренера
    selectByCoach(coach: string): void {
        this.students = this.source.filter(s => s.coach === coach);
    }

    // форма для даты рождения
    formByDateOfBirth = this._fb.group({
        dateOfBirth: [null, [Validators.required]]
    });

    // выборка студентов с заданной датой рождения
    selectByDateOfBirth(dateOfBirth: string): void {
        let date = new Date(dateOfBirth);

        this.students = this.source.filter(s => s.dateOfBirth!.valueOf() === date.valueOf());
    }

    formByLevelRangeControls = {
        min: this._fb.control(this.levelList[0].value, [Validators.required]),
        max: this._fb.control(this.levelList[this.levelList.length - 1].value, [Validators.required])
    }

    // форма для диапазона разрядов
    formByLevelRange = this._fb.group({
        min: this.formByLevelRangeControls.min,
        max: this.formByLevelRangeControls.max
    }, {asyncValidators: CustomValidators.range(this.formByLevelRangeControls.min, this.formByLevelRangeControls.max)});

    // выборка студентов с заданным диапазоном разрядов
    selectByLevelRange(min: number, max: number): void {
        this.students = this.source.filter(s => s.level!.value >= min && s.level!.value <= max);
    }

    formByAgeRangeControls = {
        min: this._fb.control(18, [Validators.required, Validators.min(0), Validators.max(200)]),
        max: this._fb.control(25, [Validators.required, Validators.min(0), Validators.max(200)]),
    }

    // форма для диапазона возраста
    formByAgeRange = this._fb.group({
        min: this.formByAgeRangeControls.min,
        max: this.formByAgeRangeControls.max
    }, {asyncValidators: CustomValidators.range(this.formByAgeRangeControls.min, this.formByAgeRangeControls.max)})

    // выборка студентов с заданным диапазоном возраста
    selectByAgeRange(min: number, max: number): void {
        this.students = this.source.filter(s => {
            let age = new Date().getFullYear() - s.dateOfBirth!.getFullYear();

            return age >= min && age <= max;
        });
    }

    // выборка самых молодых студентов
    selectByYoungest(): void {
        let maxYear = Math.max(...this.source.map(s => s.dateOfBirth!.getFullYear()));

        this.students = this.source.filter(s => s.dateOfBirth!.getFullYear() === maxYear);
    }

    // выборка самых старых студентов
    selectByOldest(): void {
        let minYear = Math.min(...this.source.map(s => s.dateOfBirth!.getFullYear()));

        this.students = this.source.filter(s => s.dateOfBirth!.getFullYear() === minYear);
    }

}
