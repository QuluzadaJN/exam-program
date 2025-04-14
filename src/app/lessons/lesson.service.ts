import { Injectable } from '@angular/core';
import { Lesson } from './lesson.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private lessons: Lesson[] = [
    {
      code: 'MAT',
      name: 'Riyaziyyat',
      class: 8,
      teacherName: 'Odelya',
      teacherSurname: 'Mamedova',
    },
    {
      code: 'AZD',
      name: 'Azerbaycan dili',
      class: 7,
      teacherName: 'ELvan',
      teacherSurname: 'Abbasova',
    },
  ]
  constructor() { }

  getLessons(): Observable<Lesson[]> {
    return of(this.lessons);
  }

  getLessonByCode(code: string): Observable<Lesson | undefined> {
    const lesson = this.lessons.find(l => l.code === code);
    return of(lesson);
  }

  createLesson(lesson: Lesson): Observable<void> {
    this.lessons.push(lesson);
    return of(undefined);
  }

  updateLesson(updated: Lesson): Observable<void> {
    const index = this.lessons.findIndex(l => l.code === updated.code);
    if(index !== -1){
      this.lessons[index] = updated;
    }
    return of(undefined);
  }

  deleteLesson(code: string): Observable<void> {
    this.lessons = this.lessons.filter(l => l.code !== code);
    return of(undefined);
  }
}
