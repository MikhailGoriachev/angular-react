import {Component, OnInit} from '@angular/core';
import {CanComponentDeactivate} from '../../auth-services/can-deactivate-guard.service';

// для использования гарда выхода компонент должен реализовать инитерфейс CanComponentDeactivate
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html'
})
export class UserSettingsComponent implements OnInit,
  CanComponentDeactivate {

  constructor() {
  }

  userName = "jane";

  saved = true;

  save() {
    this.saved = true;
  }

  changed() {
    this.saved = false;
  }

  // проверка возможности выхода, вызывается при выходе из компоента
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
