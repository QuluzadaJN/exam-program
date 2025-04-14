import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'lessons',
        loadChildren: () => import('./lessons/lessons.module').then(m => m.LessonsModule)
    },
    {
        path: 'students',
        loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
    },
    {
        path: 'exams',
        loadChildren: () => import('./exams/exams.module').then(m => m.ExamsModule)
    },
];

