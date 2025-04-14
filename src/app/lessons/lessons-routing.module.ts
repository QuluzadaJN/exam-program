import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';

const routes: Routes = [
  { path: '', component: LessonListComponent },
  { path: 'create', component: LessonFormComponent},
  { path: 'edit/:code', component: LessonFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
