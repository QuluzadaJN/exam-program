import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson.model';
import { LessonService } from '../lesson.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent implements OnInit {
  lessons: Lesson[] = [];

  constructor(
    private lessonService: LessonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLessons();
  }

  loadLessons(): void {
    this.lessonService.getLessons().subscribe(data=> {
      this.lessons = data;
    })
  }

  onEdit(code: string): void {
    this.router.navigate(['/lessons/edit', code]);
  }

  onDelete(code: string): void {
    if(confirm('Bu dersi silmek istediyinize emin misiniz?')){
      this.lessonService.deleteLesson(code).subscribe(() => {
        this.loadLessons();
      })
    }
  }

  onCreate(): void {
    this.router.navigate(['/lessons/create']);
  }
}
