import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-http-request01',
  templateUrl: './http-request01.component.html'
})
export class HttpRequest01Component implements OnInit {
  // подключение к сервису получения данных
  constructor(private getDataService: GetDataService) { }

  users: any;

  ngOnInit(): void {
    // обращение к серверу и подписка на получение результата
    // запроса (данных)
    this.getDataService.getDataMethod()
      .subscribe(res => {
        console.dir(res);
        this.users = res;
    })
  } // ngOnInit

}
