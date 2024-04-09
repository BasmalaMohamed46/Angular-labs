import { Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { OneStudentComponent } from './Components/one-student/one-student.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { ErrComponent } from './Components/err/err.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'students', pathMatch: 'full' },
    { path: 'students', component: StudentsComponent },
    { path: 'students/:id', component: StudentDetailsComponent },
    { path: 'add', component: AddStudentComponent },
    { path: 'update/:id', component: UpdateStudentComponent },
    { path: '**', component: ErrComponent},
];
