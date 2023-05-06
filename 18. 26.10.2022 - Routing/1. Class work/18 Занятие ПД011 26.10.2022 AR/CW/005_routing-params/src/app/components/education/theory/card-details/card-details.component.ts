import {LessonDataBaseService} from './../lesson-data-base.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  // ActivatedRoute - содержит информацию о маршруте связанную с компонентом, который загружен в outlet
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private serverServive: LessonDataBaseService) {
  }

  themeLesson: any;

  ngOnInit(): void {
    let idLesson = null;
    this.activatedRoute.params.forEach(param => idLesson = param['id-lesson'])
    this.themeLesson = this.serverServive.getLessonTheme(idLesson)
  }

  goBack() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
