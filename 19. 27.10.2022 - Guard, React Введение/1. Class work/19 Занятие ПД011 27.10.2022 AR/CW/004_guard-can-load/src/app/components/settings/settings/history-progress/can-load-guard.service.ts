import {Injectable} from '@angular/core';
import {CanLoad} from '@angular/router';

// Guard загрузки, должен реализовывать интерфейс Canload
@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {

  constructor() {
  }

  // установить true или false, продемонстрировать работу
  // true - можно загружать
  // false - нельзя загружать
  canLoad() {
    return false;
  }

}
