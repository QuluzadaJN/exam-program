import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson.model';
import { LessonService } from '../lesson.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson-form',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './lesson-form.component.html',
  styleUrl: './lesson-form.component.css'
})
export class LessonFormComponent implements OnInit {
  lesson: Lesson = {
    code: '',
    name: '',
    class: 1,
    teacherName: '',
    teacherSurname: '',
  };

  isEditMode = false;

  constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if(code) {
      this.isEditMode = true;
      this.lessonService.getLessonByCode(code).subscribe((data) => {
        if (data) {
          this.lesson = {...data};
        }
      })
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.lessonService.updateLesson(this.lesson).subscribe(() => {
        this.router.navigate(['/lessons']);
      })
    } else {
      this.lessonService.createLesson(this.lesson).subscribe(() => {
        this.router.navigate(['/lessons']);
      })
    }
  }

  onCancel(): void {
    this.router.navigate(['/lessons']);
  }
}
