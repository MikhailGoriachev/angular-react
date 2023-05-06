import { LessonDataBaseService } from './../lesson-data-base.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  // ActivatedRoute - содержит информацию о маршруте связанную с компонентом, который загружен в outlet
  constructor(
    private router: Router,                       // сервис маршрутизации
    private activatedRoute: ActivatedRoute,       // сервис для навигации  по компонентам
    private serverServive: LessonDataBaseService  // сервис получения данных
  ) { }

  themeLesson: any;

  ngOnInit(): void {
    let idLesson: any = null;

    // это JS - в массиве только один элемент, но forEach() :(
    // читаем значение параметра, переданного, через маршрут
    // idLesson читать таким образом - плохо
    this.activatedRoute.params.forEach(param => idLesson = param['id-lesson']);
    this.themeLesson = this.serverServive.getLessonTheme(idLesson)
  }


  // переход на предыдущий комопонент, т.е. туда, откуда пришли
  goBack() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}
