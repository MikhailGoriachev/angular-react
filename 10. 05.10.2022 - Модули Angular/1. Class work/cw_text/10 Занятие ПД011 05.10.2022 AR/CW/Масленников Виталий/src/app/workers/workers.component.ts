import { Component, OnInit } from '@angular/core';
import { IconNamesEnum } from "ngx-bootstrap-icons";
import { Worker } from "../../models/worker"
import { WorkerFactory } from "../../models/workerFactory";
import { sortBy } from "../../util/array";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  // время выделения
  private readonly timeoutDelay: number = 10_000;
  // таймер для выделения
  private timeoutHandler: NodeJS.Timeout | undefined;

  // названия иконок
  iconNames = IconNamesEnum;

  // исходные данные
  sourceData: Worker[];
  // данные для отображения
  workers: Worker[];
  
  positions: string[];
  years: number[];

  // настройка заголовков колонок
  columns = [
    { name: 'Id', sortProp: 'id' },
    { name: 'Фото' },
    { name: 'Фамилия И.О.', sortProp: 'fullName' },
    { name: 'Пол', sortProp: 'gender' },
    { name: 'Должность', sortProp: 'position' },
    { name: 'Год поступления', sortProp: 'admissionYear' },
    { name: 'Стаж' },
    { name: 'Оклад', sortProp: 'salary' },
  ];

  isOrderDescend: boolean = false;        // текущий порядок сортировки в таблице   
  lastSorted: string = "";                // последний сортированный столбец
  
  
  constructor() {
    this.sourceData = WorkerFactory.generateCollection(10);
    
    this.workers = [...this.sourceData];

    this.positions = this.workers.map(v => v.position)
        .filter((v, i, ar) => i == ar.indexOf(v))
        .sort((a, b) => a.localeCompare(b));
    
    this.years = this.workers.map(v => v.admissionYear)
        .filter((v, i, ar) => i == ar.indexOf(v))
        .sort();
  }

  ngOnInit(): void {
  }

  // сортировка таблицы
  onOrderChanged(event: Event, property: string) {
    event.preventDefault();

    if (property == this.lastSorted)
      this.isOrderDescend = !this.isOrderDescend;

    this.lastSorted = property;
    sortBy(this.workers, property, this.isOrderDescend);
  }


  // запуск таймера
  setSelectionTimeout() {
    clearTimeout(this.timeoutHandler);
    this.timeoutHandler = setTimeout(() => {
     // TODO: сброс критериев выделения
    }, this.timeoutDelay);
  }


  // проверка на необходимость выделения эелмента
  checkSelection(worker: Worker): boolean {

    // TODO: проверка на соотв. критериям выделения

    return false;
  }
}
