import { Injectable } from '@angular/core';

const LESSONS = [
  {
    id: 1,
    theme: 'Первая тема',
    content: 'Описание плана первой темы'
  },
  {
    id: 2,
    theme: 'Вторая тема',
    content: 'Описание плана второй темы'
  },
  {
    id: 3,
    theme: 'Третья тема',
    content: 'Описание плана третей темы'
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
  getLessonTheme(id: number){
    return LESSONS.find(lesson => lesson.id == id)
  }
}
