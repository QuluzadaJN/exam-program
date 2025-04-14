import { Component, OnInit } from '@angular/core';
import { Exam } from '../exam.model';
import { ExamService } from '../exam.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {
  exam: Exam = {
    lessonCode: '',
    studentNumber: 0,
    date: '',
    grade: 0
  };

  isEditMode = false;

  constructor(
    private examService: ExamService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const lessonCode = this.route.snapshot.paramMap.get('lessonCode');
    const studentNumber = this.route.snapshot.paramMap.get('studentNumber');

    if (lessonCode && studentNumber) {
      this.isEditMode = true;
      this.examService.getExam(lessonCode, +studentNumber).subscribe((data) => {
        if (data) {
          this.exam = { ...data };
        }
      });
    }
  }

  onSubmit(): void {
    console.log('📤 Form submit edildi:', this.exam);
  
    if (this.isEditMode) {
      this.examService.updateExam(this.exam).subscribe(() => {
        this.router.navigate(['/exams']);
      });
    } else {
      this.examService.createExam(this.exam).subscribe(() => {
        this.router.navigate(['/exams']);
      });
    }
  }
  

  onCancel(): void {
    this.router.navigate(['/exams']);
  }
}

