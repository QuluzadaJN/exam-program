import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    StudentListComponent,
    StudentFormComponent,
  ]
})
export class StudentsModule { }
