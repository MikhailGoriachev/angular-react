import {LessonDataBaseService} from './lesson-data-base.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.css']
})
export class TheoryComponent implements OnInit {

  constructor(
    private router: Router,
    private serverServive: LessonDataBaseService,
    private activatedRoute: ActivatedRoute) {
  }

  lessons: any;

  ngOnInit(): void {
    this.lessons = this.serverServive.getLessons();
  }

  goToPractice() {
    this.router.navigate(['practice']);
    // this.router.navigateByUrl('practice');
  }

  showDetailsTheme(lesson: any) {
    this.router.navigate(['theory', lesson.id])
    // this.router.navigate([lesson.id], { relativeTo: this.activatedRoute });
  }
}
