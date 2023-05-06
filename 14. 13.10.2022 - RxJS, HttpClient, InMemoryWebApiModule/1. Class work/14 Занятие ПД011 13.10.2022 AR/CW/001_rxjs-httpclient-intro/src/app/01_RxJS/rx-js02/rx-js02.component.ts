import { Component, OnInit } from '@angular/core';
import { ServerDataService } from './server-data.service';

@Component({
  selector: 'app-rx-js02',
  templateUrl: './rx-js02.component.html'
})
export class RxJs02Component implements OnInit {

  constructor(private dbService: ServerDataService) {}
  list: any;

  ngOnInit(): void {
    // this.list = this.dbService.getData()
    this.dbService.getData().subscribe(
      data=>{ this.list = data;  })
  }

}
