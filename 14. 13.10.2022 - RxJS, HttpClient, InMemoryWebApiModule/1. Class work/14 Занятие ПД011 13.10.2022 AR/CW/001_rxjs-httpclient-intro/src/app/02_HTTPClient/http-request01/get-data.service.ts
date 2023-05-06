import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// сервис для получения данных
@Injectable({
     providedIn: 'root'
})
export class GetDataService {

     // конструктор с DI для HttpClient
     constructor(private http: HttpClient) {
     }

     getDataMethod() {
          // Запрос на удаленный сервер и автоматически распарсил с json
          // формата в обычный javascript массив с объектами
          return this.http.get('https://jsonplaceholder.typicode.com/users')
     }
}
