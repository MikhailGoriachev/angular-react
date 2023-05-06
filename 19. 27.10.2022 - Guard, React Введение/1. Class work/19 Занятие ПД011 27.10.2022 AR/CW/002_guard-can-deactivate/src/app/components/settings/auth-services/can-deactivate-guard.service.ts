import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

// Интерфейс необходимый для типизации сервиса-гарда, требуем
// наличие на компоненте метода с заданной сигнатурой
// !!! для учета специфика конкретного компонена для которого делается гард !!!
export interface CanComponentDeactivate {
    // если метод вернет true перенаправление возможно, false - нет.
    canDeactivateComponent: () => Observable<boolean> | Promise<boolean> | boolean;
}

// Собственно гард выхода
@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate) {
        // проверка наличия метода и вызов его, в случае отсутствия метода позволяем уйти с маршрута.
        return component.canDeactivateComponent ? component.canDeactivateComponent() : true;
    }
}
