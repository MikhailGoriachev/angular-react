import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// ng g s todo-service что и привело к TodoServiceService
@Injectable({
     providedIn: 'root'
})
export class TodoServiceService {

     constructor(private http: HttpClient) {
     }

     getItems() {
          return this.http.get('api/todos');  // или api/fruits
     }

     // добавление, ид генрится автоматически
     addItem(task: any) {
          return this.http.post('api/todos', {name: task})
     }

     editItem(task: any) {
          return this.http.put(`api/todos/${task.id}`, task)
     }

     deleteItem(id: number) {
          return this.http.delete(`api/todos/${id}`)
     }
}
