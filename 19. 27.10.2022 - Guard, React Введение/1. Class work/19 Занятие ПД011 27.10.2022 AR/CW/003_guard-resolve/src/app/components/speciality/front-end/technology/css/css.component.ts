import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  properties: any;

  ngOnInit(): void {

    // код обеспечит получение данных от сервиса и только после этого
    // будет осуществлен переход по маршруту
    this.activatedRoute.data.subscribe(res=>{
      console.log(res)
      // cssProperties - определено как свойство Resolve-Guard
      // в маршруте
      this.properties = res['cssProperties'];
    });

    // альтернативная реализация получения данных от сервиса и только после этого
    // будет осуществлен переход по маршруту
    // this.properties = this.activatedRoute.snapshot.data['cssProperties'];
  } // ngOnInit

}
