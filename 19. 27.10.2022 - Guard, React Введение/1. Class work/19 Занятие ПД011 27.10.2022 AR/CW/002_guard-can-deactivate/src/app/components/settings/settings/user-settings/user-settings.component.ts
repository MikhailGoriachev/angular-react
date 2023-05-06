import {Component, OnInit} from '@angular/core';
import {CanComponentDeactivate} from '../../auth-services/can-deactivate-guard.service';

// для использования гарда выхода компонент должен реализовать интерфейс CanComponentDeactivate
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html'
})
export class UserSettingsComponent implements OnInit,
  CanComponentDeactivate {

  constructor() {
  }

  // данные для редактирования
  userName = "jane";

  // признак сохранения данных
  saved = true;

  // имитация сохранения
  save() {
    this.saved = true;
  }

  // обработчик изменения данных
  changed() {
    this.saved = false;
  }

  // проверка возможности выхода, вызывается ядром Angular при выходе
  // из компонента
  // (при переходе по другому адресу, например)
  canDeactivateComponent() {
    if (this.saved) {
      return true;
    } // if

    return confirm("Вы не сохранили новый логин. Выйти без сохранения?");
  } // canDeactivateComponent

  ngOnInit(): void {
  }

}
