import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe( data => {
      this.students = data;
    })
  }

  onEdit(id: number): void {
    this.router.navigate(['/students/edit', id]);
  }

  onDelete(id: number): void {
    if(confirm('Bu telebeni silmek istediyinize emin misiniz?')){
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents();
      })
    }
  }

  onCreate(): void {
    this.router.navigate(['/students/create']);
  }
}
