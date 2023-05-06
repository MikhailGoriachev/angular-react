import { Component, OnInit } from '@angular/core';
import {FleetService} from "../../models/fleet.service";
import {Ship} from "../../models/ship";

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html'
})
export class FleetComponent implements OnInit {

  // хранимое свойство - флот, получаем из локального хранилища
  public fleet;

  // отображаемое свойство
  public displayFleet: Ship[];

  // пример использования сервиса
  constructor(fleetService: FleetService) {
    this.fleet = fleetService.getShips();

    // в конструкторе просто получаем ссылку на хранимые данные
    this.displayFleet = this.fleet;
  }

  ngOnInit(): void { }

  // удаление из коллекции по id
  removeAt(id: number) {
    console.log(`Debug: removeAt, id = ${id}`);
  }

  // упорядочивание
}
