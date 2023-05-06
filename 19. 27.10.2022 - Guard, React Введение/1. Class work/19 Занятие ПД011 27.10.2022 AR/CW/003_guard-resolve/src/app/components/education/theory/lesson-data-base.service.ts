import { Injectable } from '@angular/core';

const LESSONS = [
  {
    id: 1,
    theme: 'Первая тема',
    content: 'План первой темы'
  },
  {
    id: 2,
    theme: 'Вторая тема',
    content: 'План второй темы'
  },
  {
    id: 3,
    theme: 'Третья тема',
    content: 'План третей темы'
  },
]

@Injectable({
  providedIn: 'root'
})
export class LessonDataBaseService {

  constructor() { }
  getLessons(){
    return LESSONS;
  }
  getLessonTheme(id: any){
    return LESSONS.find(lesson => lesson.id == id)
  }
}
