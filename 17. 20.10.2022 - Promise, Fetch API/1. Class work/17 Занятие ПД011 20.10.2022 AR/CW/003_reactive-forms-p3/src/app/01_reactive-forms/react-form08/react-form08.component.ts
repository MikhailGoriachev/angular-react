// усановка значений контролов и групп контролов из кода
// методы setValue(), patchValue()
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-react-form08',
    templateUrl: './react-form08.component.html'
})
export class ReactForm08Component implements OnInit {

    form: FormGroup = null!;
    name: FormControl = null!;

    constructor() {
        setTimeout(() => {
            // установить значение одного контрола (FormControl)
            this.name.setValue('Илларион');

            // установить значение группы контролов (FormGroup)
            this.form.patchValue({
                title: 'Заголовок сообщения',
                msg: 'Простой текст',

                // при раскомментировании сотрет Иллариона :)
                name: 'Валериан',

                // несуществующий контрол не приводит к неприятностям
                missedProp: 'Любой текст'
            });

            console.log(this.form.value)
        }, 3_000);
    }

    ngOnInit() {
        this.createNameControl();
        this.createForm();
    }

    createNameControl() {
        this.name = new FormControl("");
    }

    createForm() {
        this.form = new FormGroup({
            name: this.name,
            title: new FormControl(''),
            msg: new FormControl()
        });
    }

    onSubmit() {
        if (this.form.valid) {
            console.log("Отправка данных на сервер");
            console.log(this.form.value);
        }
    }

}
