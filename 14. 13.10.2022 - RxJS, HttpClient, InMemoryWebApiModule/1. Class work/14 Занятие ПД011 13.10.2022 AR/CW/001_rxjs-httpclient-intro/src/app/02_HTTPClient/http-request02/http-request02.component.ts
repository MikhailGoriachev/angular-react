import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-http-request02',
  templateUrl: './http-request02.component.html'
})
export class HttpRequest02Component implements OnInit {

  todoList: any;
  editingTask: any;

  constructor(private todoService: TodoServiceService) { }

  getTodoTasks(){
    // получить коллекцию данных
    this.todoService.getItems().subscribe(data => {
        console.log(data)
        this.todoList = data;
    })
  }

  // добавление, ид генерится автоматически
  // newTaskText - строка из поля ввода
  addTodo(newTaskText: string){
    this.todoService.addItem(newTaskText).subscribe(data => {
      console.log(data)
      this.todoList.push(data)
      // this.getTodoTasks()
    })
  }

  deleteTask(id: number){
    this.todoService.deleteItem(id).subscribe(del=>{
      console.log(del)
      this.getTodoTasks()
    })
  }

  // начало редактирования - отправка нзвания задачи в пое вволда
  // task - старое название задачи
  // input - строка из поля ввода, новое название задачи
  startEditTodo(task: any, taskField: any){
    this.editingTask = task;
    taskField.value = task.name;
  }

  // по кнопке завершения редактирования - отправить на сервер данные
  finishEditTodo(newText: string){
    this.editingTask.name = newText;
    this.todoService.editItem(this.editingTask).subscribe(res=>{
      console.log(res);
      this.editingTask = null;
    })
  }

  ngOnInit(): void {
    this.getTodoTasks()
  }

}
