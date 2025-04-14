import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Exam } from '../exam.model';
import { ExamService } from '../exam.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {
  exams: Exam[] = [];

  constructor(private examService: ExamService, private router: Router) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams(): void {
    this.examService.getExams().subscribe(data => {
      this.exams = data;
    });
  }
  

  onCreate(): void {
    this.router.navigate(['/exams/create']);
  }

  onEdit(exam: Exam): void {
    this.router.navigate(['/exams/edit', exam.lessonCode, exam.studentNumber]);
  }

  onDelete(exam: Exam): void {
    if (confirm('Silinsin?')) {
      this.examService.deleteExam(exam.lessonCode, exam.studentNumber).subscribe(() => {
        this.loadExams();
      });
    }
  }
}

