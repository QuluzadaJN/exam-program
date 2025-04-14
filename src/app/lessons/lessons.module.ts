import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsRoutingModule } from './lessons-routing.module';
import { FormsModule } from '@angular/forms';

import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';

@NgModule({
  imports: [
    CommonModule,
    LessonsRoutingModule,
    FormsModule,
    LessonListComponent,
    LessonFormComponent,
  ]
})
export class LessonsModule { }
