// Добавление и удаление элементов управления формы в процессе работы
import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormArray} from '@angular/forms';

@Component({
    selector: 'app-react-form05',
    templateUrl: './react-form05.component.html',
    styleUrls: ['./react-form05.component.css']
})
export class ReactForm05Component implements OnInit {

    // форма
    form: FormGroup = null!;

    // элемент управления
    fullName: FormControl = null!;

    // массив элементов управления
    contacts: FormArray = null!;

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    // создание контролов формы
    createFormControls() {
        this.fullName = new FormControl("Иванова Мария", Validators.required);
        this.contacts = new FormArray([
            new FormControl(
                "+38(0", // начальное значение (необязательное)
                [
                    Validators.required,
                    // можно указать шаблон /рег.выражение/
                    //пример шаблона +38(071)-888-77-55
                    Validators.pattern(/\+38\(0[0-9]{2}\)-[0-9]{3}-\d{2}-\d{2}/)
            ])
        ]);
    }

    // создание данных для работы формы
    createForm() {
        this.form = new FormGroup({
            fullName: this.fullName,
            contacts: this.contacts
        });
    }

    // обработчик отправки формы
    onSubmit() {
        if (this.form.valid
            && (this.form.get('contacts') as FormArray).controls.length > 0) {
            console.log("Отправка данных на сервер");
            console.dir(this.form.value);
        } else {
            console.log("Ошибка")
        } // if
    } // onSubmit

    // способ вернуть классы для индикации результатов валидаци
    getClass(control: FormControl) {
        return {
            "is-invalid": control.invalid && control.dirty,
            "is-valid": control.valid && control.dirty
        };
    } // getClass

    // добавление поля ввода в FormArray contacts
    addPhone() {
        // МОБИЛЬНЫЙ НОМЕР БЕЗ +38()!!!!
        //пример шаблона 099-888-77-55
        this.contacts
            .push(new FormControl("+38(0", [
                Validators.required,
                // возможно указание рег. выражения в виде строки (меньше
                // возмоностей - начальное значение в нашем конкретном случае
                // д.б. пустым)
                // Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}')
                Validators.pattern(/\+38\(0[0-9]{2}\)-[0-9]{3}-\d{2}-\d{2}/)
            ]));
    } // addPhone

    // удаление добавленных полей ввода
    clearAll() {
        this.contacts.clear()
    } // clearAll

}
