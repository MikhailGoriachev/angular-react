import { Component, OnInit } from '@angular/core';
import {Worker} from "../../models/Workers";
import {Enterprise} from "../../models/Enterprise";

@Component({
  selector: 'app-workers-process',
  templateUrl: './workers-process.component.html',
  styleUrls: ['./workers-process.component.css']
})
export class WorkersProcessComponent implements OnInit {

  // коллекция для хранения
  private _workers: Array<Worker>;

  // коллекция для отображения
  private _displayWorkers: Array<Worker>;
  get displayWorkers(): Array<Worker> { return this._displayWorkers; }

  constructor() {
    // имитация получения данных от провайдера
    this._workers = Enterprise.getWorkers();

    // копируем ссылку
    this._displayWorkers = this._workers;
  }

  ngOnInit(): void {}

}
