import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamFormComponent } from './exam-form/exam-form.component';

const routes: Routes = [
  { path: '', component: ExamListComponent },
  { path: 'create', component: ExamFormComponent },
  { path: 'edit/:lessonCode/:studentNumber', component: ExamFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsRoutingModule { }
