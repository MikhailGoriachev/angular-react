import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-http-request03',
  templateUrl: './http-request03.component.html'
})
export class HttpRequest03Component implements OnInit {

  // HttpClient не стоит внедрять в компоент напрямую, в д.с. - только для упрощения
  constructor(private http: HttpClient) { }

  arr100 = Array(100)
  albums: any;

  // параметры строки запроса (ключ - значения)
  // имена в методе set()- это и есть имена параметров
  // .set(key: string, value: string)
  params: any;

  ngOnInit(): void {
    // let params = new HttpParams()
    //                   .set('_end', '22')
    //                   .set('_start', '15')
    //-----------------------------------------------------
    // let params = new HttpParams()
    //     params = params.append('_start', '15').append('_end', '22')
    //-----------------------------------------------------
    // this.params = new HttpParams().set('_limit', '20')
    this.params = new HttpParams()
        this.params = this.params.append('_start', '15')
        // this.params = this.params.append('_end', '22')
        this.params = this.params.append('_limit', '50')
        // this.params = this.params.set('_end', '33')
        // this.params = this.params.delete('_limit', '50')
    // this.http.get('https://jsonplaceholder.typicode.com/albums?_start=20&_limit=10')
    this.http.get(
      'https://jsonplaceholder.typicode.com/albums',
        {
          params: this.params
          // Тоже самое что
          // params: params (property: varaible)
        }
      ).subscribe(res =>{
        console.log(res);
        this.albums = res;
    })
  }

  // получение данных от HTTP-сервера, требуем limit записей
  loadList(limit: any){
    // _limit=limit&_start=1
    this.params = this.params.set('_limit', limit);
    this.params = this.params.append('_start', '1');

    this.http.get(
      'https://jsonplaceholder.typicode.com/albums',
      {
        params: this.params
        // Тоже самое что
        // params: params (property: varaible)
      }
    )
      .subscribe(res =>{
        // console.log(res);
        this.albums = res;
      })
  }

}
