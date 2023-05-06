import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import {Observable} from 'rxjs/internal/Observable';
import {FrontEndServerService} from './front-end-server.service';

// Пример Resolve Gurad
// вызывается автоматически Angular при переходе на маршрут
// (!! какой именно маршрут - задается в константе routes !!)
@Injectable({
  providedIn: 'root'
})
export class ResolveForCssService implements Resolve<any> {

  // указали источник данных
  constructor(private frontServer: FrontEndServerService) {
  }

  // получение данных из источника
  resolve(): Observable<any> {
    return this.frontServer.getCss();
  }
}
