import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit {
  student: Student = {
    id: 1,
    name: '',
    surname: '',
    class: 1,
  };

  isEditMode = false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id) {
      this.isEditMode = true;
      this.studentService.getStudentByClassNumber(id).subscribe((data) => {
        if (data) {
          this.student = {...data};
        }
      })
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.student).subscribe(() => {
        this.router.navigate(['/students']);
      })
    } else {
      this.studentService.createStudent(this.student).subscribe(() => {
        this.router.navigate(['/students']);
      })
    }
  }

  onCancel(): void {
    this.router.navigate(['/students']);
  }
}
