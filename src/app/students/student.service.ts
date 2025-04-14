import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    {
      id: 5,
      name: 'Asif',
      surname: 'Mamedov',
      class: 8,
    },
    {
      id: 4,
      name: 'Vasif',
      surname: 'Abbasov',
      class: 7,
    },
  ]

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  getStudentByClassNumber(id: number): Observable<Student | undefined> {
    const student = this.students.find(s => s.id === id);
    return of(student);
  }

  createStudent(student: Student): Observable<void> {
    this.students.push(student);
    return of(undefined);
  }

  updateStudent(updated: Student): Observable<void> {
    const index = this.students.findIndex(s => s.id === updated.id);
    if (index !== -1) {
      this.students[index] = updated;
    }
    return of(undefined);
  }

  deleteStudent(id: number): Observable<void> {
    this.students = this.students.filter(s => s.id !== id);
    return of(undefined);
  }
}
