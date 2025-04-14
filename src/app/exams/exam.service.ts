import { Injectable } from '@angular/core';
import { Exam } from './exam.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private exams: Exam[] = [
    {
      lessonCode: 'MAT',
      studentNumber: 1,
      date: "27.06.2024",
      grade: 3,
    },
    {
      lessonCode: 'AZD',
      studentNumber: 7,
      date: '28.05.2024',
      grade: 4,
    },
  ];

  constructor() {}

  getExams(): Observable<Exam[]> {
    return of(this.exams);
  }

  getExam(lessonCode: string, studentNumber: number): Observable<Exam | undefined> {
    const exam = this.exams.find(e => e.lessonCode === lessonCode && e.studentNumber === studentNumber);
    return of(exam);
  }

  createExam(exam: Exam): Observable<void> {
    this.exams.push(exam);
    return of(undefined);
  }

  updateExam(updated: Exam): Observable<void> {  
    const index = this.exams.findIndex(
      e => e.lessonCode === updated.lessonCode && e.studentNumber === updated.studentNumber
    );
    
    if (index !== -1) {
      this.exams[index] = { ...updated };
      this.exams = [...this.exams];
    }
      
    return of(undefined);
  }
  

  deleteExam(lessonCode: string, studentNumber: number): Observable<void> {
    this.exams = this.exams.filter(
      e => !(e.lessonCode === lessonCode && e.studentNumber === studentNumber)
    );
    return of(undefined);
  }
}

