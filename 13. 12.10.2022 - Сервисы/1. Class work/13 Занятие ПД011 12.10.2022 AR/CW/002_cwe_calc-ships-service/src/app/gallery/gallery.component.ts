import { Component, OnInit } from '@angular/core';
import {FleetService} from "../../models/fleet.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  // коллекция названий файлов с изображениями кораблей
  photos: string[];

  constructor(fleetService: FleetService) {
    this.photos = fleetService.getPhotos();
  }

  ngOnInit(): void { }
  flag = 0;
  firstActive(): number{
    return this.flag++;
  }
}
