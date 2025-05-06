import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentDetailComponent } from './components/student/student-detail/student-detail.component';

export const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'students/add', component: StudentAddComponent },
  { path: 'students/edit/:id', component: StudentEditComponent },
  { path: 'students/:id', component: StudentDetailComponent }
];
